'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerWrapper({ selected, onChange }) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      placeholderText="Select a date"
      className="text-sm outline-none w-full md:w-auto"
    />
  );
}
