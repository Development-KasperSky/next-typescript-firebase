import React from "react";

type BracketItemComponentProps = {
  disable: boolean
}

export const BracketItemComponent: React.FC<BracketItemComponentProps> = ({
  disable
}) => {
  const [result, setResult] = React.useState({
    "index": 0,
    "home": {
      "name": "",
      "score": 0
    },
    "visitor": {
      "name": "",
      "score": 0
    },
  });

  const onChangeHome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult((prevObj) => ({
      ...prevObj,
      home: {
        ...prevObj.home,
        name: (e.target as HTMLInputElement).value
      }
    }));
  }

  const onChangeFirstScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult((prevObj) => ({
      ...prevObj,
      home: {
        ...prevObj.home,
        score: Number((e.target as HTMLInputElement).value)
      }
    }));
  }
  ``
  const onChangeVisitor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult((prevObj) => ({
      ...prevObj,
      visitor: {
        ...prevObj.visitor,
        name: (e.target as HTMLInputElement).value
      }
    }));
  }

  const onChangeSecondScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult((prevObj) => ({
      ...prevObj,
      visitor: {
        ...prevObj.visitor,
        score: Number((e.target as HTMLInputElement).value)
      }
    }));
  }

  return (
    <>
      <form className='flex flex-col mb-3'>
        <div>
          <input disabled={disable} className='w-40 h-9 text-zinc-900 pl-3 rounded-tl-2xl border-amber-700 border-2' name='home' type="text" onChange={onChangeHome} />
          <input className='w-14 h-9 text-zinc-900 pl-2 rounded-tr-2xl border-amber-700 border-r-2 border-b-2 border-t-2' name='first_score' type="number" onChange={onChangeFirstScore} />
        </div>
        <div>
          <input disabled={disable} className='w-40 h-9 text-zinc-900  rounded-bl-2xl pl-3 border-amber-700 border-l-2 border-r-2 border-b-2' name='visitor' type="text" onChange={onChangeVisitor} />
          <input className='w-14 h-9 text-zinc-900 rounded-br-2xl pl-2 border-amber-700 border-r-2 border-b-2' name='second_score' type="number" onChange={onChangeSecondScore} />
        </div>
      </form>
    </>
  )
}