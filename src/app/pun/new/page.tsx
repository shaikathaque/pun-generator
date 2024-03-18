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
  question: z.string().optional(),
  punchline: z.string().min(1, {
    message: 'Punchline must have at least 1 character.',
  }),
});

export default function CreatePunPage() {
  const createPunForm = useForm<z.infer<typeof createPunFormSchema>>({
    resolver: zodResolver(createPunFormSchema),
    defaultValues: {
      question: '',
      punchline: '',
    },
  });

  async function onSubmit({
    question,
    punchline,
  }: z.infer<typeof createPunFormSchema>) {
    const formData = {
      question: question ? question : null,
      punchline: punchline,
    };
    await createPun(formData);
  }

  return (
    <div className="flex flex-col items-center py-10">
      <Form {...createPunForm}>
        <form onSubmit={createPunForm.handleSubmit(onSubmit)}>
          <Card className="min-w-fit">
            <CardHeader>
              <CardTitle>Submit a Pun</CardTitle>
              <CardDescription>
                Share your best puns with us! You can either submit a
                question/setup and a punchline or just the punchline.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              <FormField
                control={createPunForm.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="question">
                      Question/Setup (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g. How many software engineers does it take to change a light bulb?"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Setup up your pun for a funny punchline. This is usually
                      in the form of a question, but it is not always required.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createPunForm.control}
                name="punchline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="punchline">Punchline</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="None. That's a hardware problem."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter your witty punchline! This will initially be hidden
                      to viewers. They can reveal it after trying to guess the
                      answer!
                    </FormDescription>
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
