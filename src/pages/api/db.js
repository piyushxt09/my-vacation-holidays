import mysql from 'mysql2/promise';

export async function getDBConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}
