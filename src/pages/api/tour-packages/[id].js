import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';
import { getDBConnection } from '../db';

export const config = {
    api: {
        bodyParser: false,
    },
};

const slugify = (text) =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        try {
            const form = new IncomingForm({
                uploadDir: path.join(process.cwd(), 'public/galleryimg'),
                keepExtensions: true,
                multiples: false,
            });

            form.parse(req, async (err, fields, files) => {
                if (err) {
                    console.error('Formidable parse error:', err);
                    return res.status(400).json({ error: 'Error parsing form data' });
                }

                const {
                    package_name,
                    tour_duration,
                    tour_destination,
                    tour_price,
                    inclusions,
                    exclusions,
                    indian,
                    international,
                    fixed_departure,
                   
                    itinerary = '[]',
                } = fields;

                const url = slugify(package_name);
                const connection = await getDBConnection();

                let imageFilename = null;
                if (files.image && files.image.size > 0) {
                    const file = files.image;
                    const ext = path.extname(file.originalFilename || file.newFilename);
                    const newFilename = `tour_${Date.now()}${ext}`;
                    const destPath = path.join(form.uploadDir, newFilename);
                    await fs.promises.rename(file.filepath, destPath);
                    imageFilename = newFilename;
                }

                const updateFields = {
                    package_name,
                    url,
                    tour_duration,
                    tour_destination,
                    tour_price,
                    inclusions,
                    exclusions,
                    indian,
                    international,
                    fixed_departure,
                   
                };

                if (imageFilename) {
                    updateFields.image = imageFilename;
                }

                const updateSet = Object.keys(updateFields)
                    .map((key) => `${key} = ?`)
                    .join(', ');

                const updateValues = [...Object.values(updateFields), id];

                await connection.execute(
                    `UPDATE tour_packages SET ${updateSet} WHERE id = ?`,
                    updateValues
                );

                // Delete existing itinerary entries
                await connection.execute(
                    'DELETE FROM tour_itinerary WHERE tour_package_url = ?',
                    [url]
                );

                // Insert new itinerary
                const itineraryDays = JSON.parse(itinerary);
                for (const day of itineraryDays) {
                    const { day_number, title, description } = day;
                    await connection.execute(
                        `INSERT INTO tour_itinerary (tour_package_url, day_number, title, description)
                     VALUES (?, ?, ?, ?)`,
                        [url, day_number, title, description]
                    );
                }

                return res.status(200).json({ message: 'Tour updated successfully' });
            });
        } catch (error) {
            console.error('Error updating tour:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // GET and DELETE remain unchanged...
    else if (req.method === 'GET') {
        try {
            const connection = await getDBConnection();

            // Get the tour by ID
            const [tourRows] = await connection.execute(
                'SELECT * FROM tour_packages WHERE id = ?',
                [id]
            );

            if (tourRows.length === 0) {
                return res.status(404).json({ error: 'Tour not found' });
            }

            const tour = tourRows[0];

            // Fetch related itinerary based on package URL
            const [itineraryRows] = await connection.execute(
                'SELECT day_number, title, description FROM tour_itinerary WHERE tour_package_url = ? ORDER BY day_number ASC',
                [tour.url]
            );

            return res.status(200).json({
                tour,
                itinerary: itineraryRows,
            });
        } catch (error) {
            console.error('Error fetching tour:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    else if (req.method === 'DELETE') {
        try {
            const connection = await getDBConnection();
            await connection.execute('DELETE FROM tour_packages WHERE id = ?', [id]);
            return res.status(200).json({ message: 'Deleted successfully' });
        } catch (error) {
            console.error('Error deleting tour:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
