'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';
import { revalidatePath } from 'next/cache';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { Pun, Reaction } from '@prisma/client';

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
    const { userId } = await auth();

    return await prisma.pun.findMany({
      include: {
        _count: {
          select: {
            punReactions: { where: { reaction: Reaction.LIKE } },
          },
        },
        // if user logged in, include their existing reaction
        ...(userId && {
          punReactions: {
            take: 1,
            where: {
              userId,
            },
          },
        }),
      },
    });
  } catch (err) {
    console.error('Error: getPuns', err);
    Sentry.captureException(err);
    return [];
  }
};

export const getPunsByUsername = async (username: string) => {
  try {
    const { userId } = await auth();

    return await prisma.pun.findMany({
      where: {
        username: username,
      },
      include: {
        _count: {
          select: {
            punReactions: { where: { reaction: Reaction.LIKE } },
          },
        },
        // if user logged in, include their existing reaction
        ...(userId && {
          punReactions: {
            take: 1,
            where: {
              userId,
            },
          },
        }),
      },
    });
  } catch (err) {
    console.error('Error: getPuns', err);
    Sentry.captureException(err);
    return [];
  }
};

export const getCurrentUsername = async () => {
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
    return user.username;
  } catch (err) {
    Sentry.captureException(err);
  }
};

export const updatePunReaction = async (
  punId: Pun['id'],
  reaction: Reaction,
) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('User not logged in');
    }

    // This will create a new reaction if it doesn't exist, or update the existing one
    await prisma.punReaction.upsert({
      where: {
        punId_userId: {
          punId,
          userId,
        },
      },
      update: {
        reaction,
      },
      create: {
        punId,
        userId,
        reaction,
      },
    });
  } catch (err) {
    Sentry.captureException(err);
    console.log(err);
  }
};

export const deletePunReaction = async (punId: Pun['id']) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('User not logged in');
    }

    // This will create a new reaction if it doesn't exist, or update the existing one
    await prisma.punReaction.delete({
      where: {
        punId_userId: {
          punId,
          userId,
        },
      },
    });
  } catch (err) {
    Sentry.captureException(err);
    console.log(err);
  }
};
