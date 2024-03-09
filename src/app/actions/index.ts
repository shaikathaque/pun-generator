'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export const createPun = async (formData: FormData) => {
  try {
    await prisma.pun.create({
      data: {
        content: formData.get('content') as string,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
  redirect('/');
};
