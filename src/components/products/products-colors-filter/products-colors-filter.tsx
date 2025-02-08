'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const colors = [
  { title: 'red', color: '#FF0000' },
  { title: 'blue', color: '#0000FF' },
  { title: 'green', color: '#008000' },
  { title: 'yellow', color: '#FFFF00' },
  { title: 'orange', color: '#FFA500' },
  { title: 'purple', color: '#800080' },
  { title: 'pink', color: '#FFC0CB' },
  { title: 'brown', color: '#A52A2A' },
  { title: 'black', color: '#000000' },
  { title: 'white', color: '#DFE1E5' },
  { title: 'gray', color: '#808080' },
];

export const ProductsColorsFilter = () => {
  const [color, setColor] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const currentColor = searchParams.get('color');

    setColor(currentColor);
  }, [searchParams]);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setColor(value);
  };

  return (
    <div className='border-b border-zinc-200 pb-10'>
      <h5 className='mb-6 font-medium capitalize'>colors</h5>

      <div className='flex flex-wrap items-center gap-4'>
        {colors.map((item) => (
          <input
            key={item.title}
            type='radio'
            name='color'
            radioGroup='color'
            checked={item.title === color}
            value={item.title}
            onChange={handleClick}
            style={{ backgroundColor: item.color }}
            className={`h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-transparent checked:ring-[1px] checked:ring-black checked:ring-offset-2 focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
};
