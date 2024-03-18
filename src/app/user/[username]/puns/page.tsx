import { getPunsByUsername } from '@/app/actions';
import PunCard from '@/components/punCard';

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPuns({ params }: Props) {
  const username = params.username;
  const puns = await getPunsByUsername(username);

  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <h1 className="text-lg font-semibold">Puns by {username}</h1>
      {puns.map((pun, index) => {
        return <PunCard key={index} {...pun} />;
      })}
    </div>
  );
}
