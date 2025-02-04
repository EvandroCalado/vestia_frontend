import { Button, Checkbox } from '@/components/ui';
import { ProductsFilterPrice } from '../products-filter-price';

const categories = [
  'shirts',
  'pants',
  'jackets',
  'shorts',
  'activewear',
  'accessories',
];

const sizes = ['s', 'm', 'x', 'xl', 'xxl'];

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

type ProductsFilterProps = {
  params: { [key: string]: string | string[] | undefined };
};

export const ProductsFilter = ({ params }: ProductsFilterProps) => {
  return (
    <form
      action='/products'
      className='hidden h-max w-72 space-y-8 rounded-lg border px-5 py-7 md:block'
    >
      {/* categories */}
      <div className='w-full space-y-4 border-b border-zinc-200 pb-10'>
        <h5 className='mb-6 font-medium capitalize'>categories</h5>

        {categories.map((category) => (
          <div key={category} className='flex items-center gap-2'>
            <Checkbox
              id={category}
              name='categories'
              value={category || params.categories}
              defaultChecked={
                category === params.categories ||
                (Array.isArray(params.categories) &&
                  params.categories.includes(category))
              }
            />
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

        <div className='flex flex-wrap items-center gap-4'>
          {colors.map((color) => (
            <input
              key={color.title}
              type='radio'
              name='color'
              radioGroup='color'
              value={color.title}
              defaultChecked={color.title === params.color}
              style={{ backgroundColor: color.color }}
              className={`h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-transparent checked:ring-[1px] checked:ring-black checked:ring-offset-2 focus:outline-none`}
            />
          ))}
        </div>
      </div>

      {/* size */}
      <div className='border-b border-zinc-200 pb-10'>
        <h5 className='mb-6 font-medium capitalize'>sizes</h5>

        <div className='flex flex-wrap items-center gap-4'>
          {sizes.map((size) => (
            <div key={size} className='relative h-10 w-10'>
              <input
                type='radio'
                name='size'
                radioGroup='size'
                value={size}
                defaultChecked={size === params.size}
                className={`h-10 w-10 cursor-pointer appearance-none rounded border checked:border-black checked:ring-offset-2 focus:outline-none`}
              />
              <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* price */}
      <ProductsFilterPrice paramPrice={params.price} />

      <Button className='w-full' type='submit'>
        Apply
      </Button>
    </form>
  );
};
