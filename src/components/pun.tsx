import { Pun } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CircleUserRound, ThumbsDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { handlePunReaction } from '@/app/actions';
import PunReactions from './punReactions';

export default function Pun({ content, username, createdAt, id }: Pun) {
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
            <PunReactions punId={id} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
