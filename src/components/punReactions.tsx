'use client';

import { deletePunReaction, updatePunReaction } from '@/app/actions';
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
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [likeToggle, setLikeToggle] = useState(false);
  const [dislikeToggle, setDislikeToggle] = useState(false);
  const [numLikes, setNumLikes] = useState(likeCount);

  // initialize the reaction based on data fetched from the server
  useEffect(() => {
    if (userReaction) {
      setReaction(userReaction.reaction);
    }
  }, [userReaction]);

  // update the like/dislike button state based on the user's reaction
  useEffect(() => {
    if (reaction === Reaction.LIKE) {
      setLikeToggle(true);
      setDislikeToggle(false);
    } else if (reaction === Reaction.DISLIKE) {
      setDislikeToggle(true);
      setLikeToggle(false);
    } else {
      setLikeToggle(false);
      setDislikeToggle(false);
    }
  }, [reaction]);

  const handleLike = async () => {
    // was previously liked, remove like
    if (reaction === Reaction.LIKE) {
      setReaction(null);
      setNumLikes((prev) => prev - 1);
      await deletePunReaction(punId);
      return;
    }

    // was previously disliked, set to like
    if (reaction === Reaction.DISLIKE) {
      setReaction(Reaction.LIKE);
      setNumLikes((prev) => prev + 1);
      await updatePunReaction(punId, Reaction.LIKE);
      return;
    }

    // user had no previous reaction
    setReaction(Reaction.LIKE);
    setNumLikes((prev) => prev + 1);
    await updatePunReaction(punId, Reaction.LIKE);
  };

  const handleDislike = async () => {
    // was previously disliked, set to null
    if (reaction === Reaction.DISLIKE) {
      setReaction(null);
      await deletePunReaction(punId);
      return;
    }

    // was previously liked, set to dislike
    if (reaction === Reaction.LIKE) {
      setReaction(Reaction.DISLIKE);
      setNumLikes((prev) => prev - 1);
      await updatePunReaction(punId, Reaction.DISLIKE);
      return;
    }

    // user had no previous reaction
    setReaction(Reaction.DISLIKE);
    await updatePunReaction(punId, Reaction.DISLIKE);
  };

  return (
    <>
      <Toggle pressed={likeToggle} onClick={handleLike}>
        <ThumbsUp
          className="mr-2 h-4 w-4"
          aria-pressed={true}
          aria-label="Toggle like"
        />
        <p>{numLikes}</p>
      </Toggle>
      <Toggle pressed={dislikeToggle} onClick={handleDislike}>
        <ThumbsDown className="h-4 w-4" />
      </Toggle>
    </>
  );
}
