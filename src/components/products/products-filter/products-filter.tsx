import { Checkbox, Slider } from '@/components/ui';
import { currencyFormat } from '@/utils';

const categories = [
  'shirts',
  'pants',
  'jackets',
  'shorts',
  'activewear',
  'accessories',
];

const variants = [
  {
    id: 143,
    title: 'blue',
    color: '#3a5f81',
    size: 'x',
    images: [
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1737074811/large_1_3908be57a4.webp',
    ],
  },
  {
    id: 144,
    title: 'green',
    color: '#74705e',
    size: 'x',
    images: [
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1737075014/large_5_6616ce92bb.webp',
    ],
  },
  {
    id: 146,
    title: 'black',
    color: '#1f2028',
    size: 's',
    quantity: 2,
    price: 90,
    images: [
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1737075339/large_1_73ac0e92d1.webp',
    ],
  },
  {
    id: 151,
    title: 'white',
    color: '#dfe1e5',
    size: 's',
    quantity: 5,
    price: 85,
    images: [
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1737074057/large_1_bf3d8788ba.webp',
    ],
  },
];

export const ProductsFilter = () => {
  return (
    <div className='hidden h-max w-60 space-y-8 rounded-lg border px-5 py-7 md:block'>
      {/* categories */}
      <div className='space-y-4 border-b border-zinc-200 pb-10'>
        <h5 className='mb-6 font-medium capitalize'>categories</h5>

        {categories.map((category) => (
          <div key={category} className='flex items-center gap-2'>
            <Checkbox id={category} />
            <label
              htmlFor={category}
              className='cursor-pointer text-sm capitalize leading-none text-zinc-500'
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      {/* colors */}
      <div className='border-b border-zinc-200 pb-10'>
        <h5 className='mb-6 font-medium capitalize'>colors</h5>

        <div className='flex items-center gap-4'>
          {variants.map((variant) => (
            <button
              key={variant.id}
              style={{ background: variant.color }}
              className='h-6 w-6 rounded-full ring-[1px] ring-zinc-300 ring-offset-[3px]'
            />
          ))}
        </div>
      </div>

      {/* size */}
      <div className='border-b border-zinc-200 pb-10'>
        <h5 className='mb-6 font-medium capitalize'>sizes</h5>

        <div className='flex flex-wrap items-center gap-4'>
          {variants.map((variant) => (
            <button
              key={variant.id}
              className='rounded border px-4 py-2 text-sm uppercase'
            >
              {variant.size}
            </button>
          ))}
        </div>
      </div>

      {/* price */}
      <div>
        <h5 className='mb-6 font-medium capitalize'>price</h5>

        <div className='space-y-2'>
          <Slider defaultValue={[0]} max={100} step={1} />
          <div className='flex items-center justify-between'>
            <span>{currencyFormat(0)}</span>
            <span>{currencyFormat(100)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
