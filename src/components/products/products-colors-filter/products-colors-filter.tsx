'use client';

import { parseAsString, useQueryState } from 'nuqs';

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

type ProductsColorsFilterProps = {
  refetchProducts: () => Promise<void>;
};

export const ProductsColorsFilter = ({
  refetchProducts,
}: ProductsColorsFilterProps) => {
  const [color, setColor] = useQueryState(
    'color',
    parseAsString.withDefault(''),
  );

  const handleColors = (value: string) => {
    setColor(value);

    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <div className='border-zinc-200 pb-5 md:mb-5 md:border-b'>
      <h5 className='mb-2 font-medium capitalize md:mb-6'>colors</h5>

      <div className='flex flex-wrap items-center gap-4'>
        {colors.map((item) => (
          <input
            key={item.title}
            type='radio'
            name='color'
            radioGroup='color'
            checked={item.title === color}
            value={item.title}
            onChange={(e) => handleColors(e.target.value)}
            style={{ backgroundColor: item.color }}
            className={`h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-transparent checked:ring-[1px] checked:ring-black checked:ring-offset-2 focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
};
