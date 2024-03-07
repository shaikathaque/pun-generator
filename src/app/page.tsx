import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  const getPuns = async () => {
    try {
      return await prisma.pun.findMany();
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const puns = await getPuns();

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Welcome to Pun Generator!
      </h1>
      <div>
        {puns.map((pun, i) => {
          return <div key={i}>{pun.content}</div>;
        })}
      </div>
      <Link href="/pun">Pun</Link>
    </main>
  );
}
