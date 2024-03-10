import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getPuns } from '@/app/actions';
import Pun from '@/components/pun';
import { Plus } from 'lucide-react';

export default async function Home() {
  const puns = await getPuns();
  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <Link href="/pun">
        <Button>
          <Plus className="2-4 mr-2 h-4" />
          Submit a Pun
        </Button>
      </Link>
      <div className="flex flex-col gap-y-5">
        {puns.map((pun, i) => {
          return <Pun key={i} {...pun} />;
        })}
      </div>
    </div>
  );
}
