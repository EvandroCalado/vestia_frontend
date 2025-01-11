export const ZodErrors = ({ error }: { error: string[] }) => {
  if (!error) return null;

  return error.map((error: string, index: number) => (
    <div key={`${index}-${error}`} className='text-xs text-red-500'>
      {error}
    </div>
  ));
};
