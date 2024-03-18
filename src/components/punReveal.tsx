'use client';

import { Pun } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Props = {
  punchline: Pun['punchline'];
};

export default function PunReveal(props: Props) {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <>
      {!showPunchline && (
        <div className="flex flex-col items-center space-y-5">
          <Button variant={'outline'} onClick={() => setShowPunchline(true)}>
            Press to Reveal
          </Button>
        </div>
      )}
      {showPunchline && <p>{props.punchline}</p>}
    </>
  );
}
