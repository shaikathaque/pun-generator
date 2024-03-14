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

    await prisma.pun.create({
      data: {
        content: formData.content,
        userId: userId,
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
