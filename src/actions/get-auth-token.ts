'use server';

import { cookies } from 'next/headers';

export const getAuthToken = async () => {
  const authToken = (await cookies()).get('jwt')?.value;

  return authToken;
};
