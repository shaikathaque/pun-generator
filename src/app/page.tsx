import prisma from "@/lib/prisma";

export default async function Home() {
  const puns = await prisma.pun.findMany()

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Welcome to Pun Generator!</h1>
      <div>
        {
          puns.map((pun, i) => {
            return (
              <div key={i}>{pun.content}</div>
            )
          })
        }
      </div>


    </main>
  );
}