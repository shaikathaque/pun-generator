'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';

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
