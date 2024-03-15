import { Pun, PunReaction } from '@prisma/client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { CircleUserRound, ThumbsDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import PunReactions from './punReactions';

type PunProps = Pun & {
  _count: {
    punReactions: number;
  };
  punReactions: PunReaction[];
};

export default async function Pun({
  content,
  username,
  id,
  _count,
  punReactions,
}: PunProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader></CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-row items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleUserRound className="mr-2 h-4 w-4" />
            <Link href={`/user/${username}/puns`}>{username}</Link>
          </div>
          <div className="ml-auto mt-3 flex flex-row items-center gap-2">
            <PunReactions
              punId={id}
              likeCount={_count.punReactions}
              userReaction={punReactions.length > 0 ? punReactions[0] : null}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
