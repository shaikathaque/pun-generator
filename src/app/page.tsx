import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getPuns } from '@/app/actions';

export default async function Home() {
  const puns = await getPuns();
  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <h1 className="text-3xl font-semibold">Puns</h1>
      <div>
        {puns.map((pun, i) => {
          return <div key={i}>{pun.content}</div>;
        })}
      </div>
      <Link href="/pun">
        <Button>Create Pun</Button>
      </Link>
    </div>
  );
}
