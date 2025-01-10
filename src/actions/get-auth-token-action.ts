'use server';

import { cookies } from 'next/headers';

export const getAuthTokenAction = async () => {
  const authToken = (await cookies()).get('jwt')?.value;

  return authToken;
};
