'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';
import { revalidatePath } from 'next/cache';
import { auth, clerkClient } from '@clerk/nextjs/server';

type CreatePunData = {
  content: string;
};
export const createPun = async (formData: CreatePunData) => {
  try {
    const { userId } = await auth();

    // TODO: redirect to login page
    if (!userId) {
      throw new Error('User not logged in');
    }

    const user = await clerkClient.users.getUser(userId);
    if (!user) {
      throw new Error('User not found');
    }

    if (!user.username) {
      throw new Error('User does not have a username');
    }

    await prisma.pun.create({
      data: {
        content: formData.content,
        userId,
        username: user.username,
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

export const getPunsByUsername = async (username: string) => {
  try {
    return await prisma.pun.findMany({
      where: {
        username: username,
      },
    });
  } catch (err) {
    console.error('Error: getPuns', err);
    Sentry.captureException(err);
    return [];
  }
};
