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
import { createPun } from '@/app/actions/index';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const createPunFormSchema = z.object({
  content: z.string().min(3, {
    message: 'Pun must be at least 3 characters long',
  }),
});

export default function CreatePunPage() {
  const createPunForm = useForm<z.infer<typeof createPunFormSchema>>({
    resolver: zodResolver(createPunFormSchema),
    defaultValues: {
      content: '',
    },
  });

  async function onSubmit(values: z.infer<typeof createPunFormSchema>) {
    await createPun(values);
  }

  return (
    <div className="flex flex-col items-center py-10">
      <Form {...createPunForm}>
        <form onSubmit={createPunForm.handleSubmit(onSubmit)}>
          <Card className="min-w-fit">
            <CardHeader>
              <CardTitle>Submit a Pun</CardTitle>
              <CardDescription>
                Submit a pun consisting of a question and a punchline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={createPunForm.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="content">Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your pun here" {...field} />
                    </FormControl>
                    <FormDescription>Enter your pun</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Submit Pun
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
