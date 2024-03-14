'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';

type CreatePunData = {
  content: string;
};
export const createPun = async (formData: CreatePunData) => {
  try {
    // TODO: check if user is logged in
    // if not, redirect to login page
    const { userId } = await auth();

    if (!userId) {
      throw new Error('User not logged in');
    }

    await prisma.pun.create({
      data: {
        content: formData.content,
        userId: userId,
      },
    });
    revalidatePath('/');
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
