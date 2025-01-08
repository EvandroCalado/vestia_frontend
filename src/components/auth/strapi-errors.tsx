type StrapiErrorsProps = {
  message: string | null;
  name: string;
  status: string | null;
};

export const StrapiErrors = ({
  error,
}: {
  readonly error: StrapiErrorsProps;
}) => {
  if (!error?.message) return null;

  return <div className='text-xs text-red-500'>{error.message}</div>;
};
