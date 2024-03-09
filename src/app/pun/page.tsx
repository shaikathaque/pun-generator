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
import { createPun } from '@/app/actions';

const formSchema = z.object({
  content: z.string().min(2, {
    message: 'Pun must be at least 2 characters long',
  }),
});

export default function Pun() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  });

  return (
    <>
      <h1>Pun Page</h1>
      <Form {...form}>
        <form action={createPun} className="space-y-8">
          <FormField
            control={form.control}
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
    </>
  );
}
