type Colors = {
  name: string;
  color: string;
};

type ProductColorsProps = {
  colors: Colors[];
};

export const ProductColors = ({ colors }: ProductColorsProps) => {
  return (
    <div className='space-y-4'>
      <h5 className='font-normal uppercase text-muted-foreground'>
        available colors
      </h5>
      <div className='flex items-center gap-4'>
        {colors.map((color) => (
          <button
            key={color.color}
            style={{ backgroundColor: color.color }}
            className='w-6 h-6 duration-150 rounded-full ring-1 ring-transparent hover:ring-primary ring-offset-4'
          />
        ))}
      </div>
    </div>
  );
};
