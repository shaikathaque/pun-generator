import { Pun } from '@prisma/client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Pun({ content, id }: Pun) {
  return (
    <Card className="w-[350px]">
      <CardHeader></CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
