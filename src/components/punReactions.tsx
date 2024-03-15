'use client';

import { handlePunReaction } from '@/app/actions';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Pun, Reaction } from '@prisma/client';
import { useState } from 'react';
import { Toggle } from './ui/toggle';

type Props = {
  punId: Pun['id'];
  likeCount: number;
};

export default function PunReactions({ punId, likeCount }: Props) {
  //   const [likeCount, setLikeCount] = useState(0);
  console.log(16, likeCount);
  const handleLike = async () => {
    // setLikeCount(likeCount + 1)
    const result = await handlePunReaction(punId, Reaction.LIKE);
  };

  const handleDislike = async () => {
    const result = await handlePunReaction(punId, Reaction.DISLIKE);
  };

  return (
    <>
      <Toggle defaultPressed={false} onClick={handleLike}>
        <ThumbsUp
          className="mr-2 h-4 w-4"
          aria-pressed={true}
          aria-label="Toggle like"
        />
        <p>{likeCount}</p>
      </Toggle>
      <Toggle defaultPressed={false} onClick={handleDislike}>
        <ThumbsDown className="h-4 w-4" />
      </Toggle>
    </>
  );
}
