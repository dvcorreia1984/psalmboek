import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {/* Apply Tailwind CSS classes to each button */}
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">1-10</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">11-20</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">21-30</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">31-40</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">41-50</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">51-60</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">61-70</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">71-80</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">81-90</Button>
      <Button className="w-1/3 p-2 border border-gray-300 rounded-lg">91-100</Button>
      <Button className='w-1/3 p-2 border border-gray-300 rounded-lg'>101-110</Button>
      <Button className='w-1/3 p-2 border border-gray-300 rounded-lg'>111-120</Button>
      <Button className='w-1/3 p-2 border border-gray-300 rounded-lg'>121-130</Button>
      <Button className='w-1/3 p-2 border border-gray-300 rounded-lg'>131-140</Button>
      <Button className='w-1/3 p-2 border border-gray-300 rounded-lg'>141-150</Button>
    </ButtonGroup>
  );
}

