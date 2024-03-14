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

export default function Pun({ content, username, createdAt }: Pun) {
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
          <div className="ml-auto flex flex-row items-center">
            {/* <ThumbsUp className="mr-2 h-4 w-4" />
            <p>0</p> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
