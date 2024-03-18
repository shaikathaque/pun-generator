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
import PunReveal from './punReveal';
import { Separator } from './ui/separator';

type PunProps = Pun & {
  _count: {
    punReactions: number;
  };
  punReactions: PunReaction[];
};

export default async function Pun({
  question,
  punchline,
  username,
  id,
  _count,
  punReactions,
}: PunProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <p className="whitespace-pre-line">{question}</p>
      </CardHeader>
      <CardContent>
        <PunReveal punchline={punchline} />
      </CardContent>
      <CardFooter>
        <div className="mt-3 flex w-full flex-row items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleUserRound className="mr-2 h-4 w-4" />
            <Link href={`/user/${username}/puns`}>{username}</Link>
          </div>
          <div className="ml-auto flex flex-row items-center gap-2">
            <PunReactions
              punId={id}
              likeCount={_count.punReactions}
              userReaction={
                punReactions && punReactions.length > 0 ? punReactions[0] : null
              }
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
