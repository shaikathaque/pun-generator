'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';
import { revalidatePath } from 'next/cache';

export const createPun = async (formData: FormData) => {
  try {
    await prisma.pun.create({
      data: {
        content: formData.get('content') as string,
      },
    });
  } catch (err) {
    Sentry.captureException(err);
    console.log(err);
  }

  revalidatePath('/');
  redirect('/');
};

export const getPuns = async () => {
  try {
    return await prisma.pun.findMany();
  } catch (err) {
    console.error('Error: getPuns', err);
    Sentry.captureException(err);
    return [];
  }
};
