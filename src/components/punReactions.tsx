'use client';

import { handlePunReaction } from '@/app/actions';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Pun, PunReaction, Reaction } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Toggle } from './ui/toggle';

type Props = {
  punId: Pun['id'];
  likeCount: number;
  userReaction: PunReaction | null;
};

export default function PunReactions({
  punId,
  likeCount,
  userReaction,
}: Props) {
  console.log(16, userReaction);
  const [likeToggle, setLikeToggle] = useState(false);
  const [dislikeToggle, setDislikeToggle] = useState(false);

  useEffect(() => {
    if (userReaction) {
      if (userReaction.reaction === Reaction.LIKE) {
        setLikeToggle(true);
      } else if (userReaction.reaction === Reaction.DISLIKE) {
        setDislikeToggle(true);
      }
    }
  }, [userReaction]);

  const handleLike = async () => {
    const result = await handlePunReaction(punId, Reaction.LIKE);
  };

  const handleDislike = async () => {
    const result = await handlePunReaction(punId, Reaction.DISLIKE);
  };

  return (
    <>
      <Toggle pressed={likeToggle} onClick={handleLike}>
        <ThumbsUp
          className="mr-2 h-4 w-4"
          aria-pressed={true}
          aria-label="Toggle like"
        />
        <p>{likeCount}</p>
      </Toggle>
      <Toggle pressed={dislikeToggle} onClick={handleDislike}>
        <ThumbsDown className="h-4 w-4" />
      </Toggle>
    </>
  );
}
