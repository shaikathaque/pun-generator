import { getPunsByUsername } from '@/app/actions';
import Pun from '@/components/pun';

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPuns({ params }: Props) {
  const username = params.username;
  const puns = await getPunsByUsername(username);

  return (
    <div className="m-10">
      <h1>User {username} Pun Page</h1>
      {puns.map((pun, index) => {
        return <Pun key={index} {...pun} />;
      })}
    </div>
  );
}
