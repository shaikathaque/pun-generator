const puns = [
  'A',
  'B',
  "C",
]

export default function Home() {

  function handleClick() {
    console.log('Like button clicked')
  }

  return (
    <main>

      <h1 className="text-3xl font-bold underline">Welcome to Pun Generator!</h1>
      <div>
        {
          puns.map((pun, i) => {
            return (
              <div key={i}>{pun}</div>
            )
          })
        }
      </div>


    </main>
  );
}
