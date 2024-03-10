'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import prisma from '@/lib/prisma';
import { createPun } from '@/app/actions/index';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const createPunFormSchema = z.object({
  content: z.string().min(2, {
    message: 'Pun must be at least 2 characters long',
  }),
});

export default function Pun() {
  const createPunForm = useForm<z.infer<typeof createPunFormSchema>>({
    resolver: zodResolver(createPunFormSchema),
    defaultValues: {
      content: '',
    },
  });

  return (
    <div className="flex flex-col items-center py-10">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Submit a Pun</CardTitle>
          <CardDescription>
            Submit a pun consisting of a question and a punchline.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...createPunForm}>
            <form action={createPun}>
              <FormField
                control={createPunForm.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="content">Content</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your pun here" {...field} />
                    </FormControl>
                    <FormDescription>Enter your pun</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit Pun</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
