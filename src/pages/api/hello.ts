import { getAge } from '@/utils/helpers';

import type { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  name: string;
  age: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TData>) {
  const age: number = getAge('07-16-2002');

  res.status(200).json({ name: 'John Doe', age: age });
}
