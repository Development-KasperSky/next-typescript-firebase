import React from "react";

import { ResultType } from "@/Models";

type BracketItemComponentProps = {
  setTotalResult: (result: ResultType) => void
  disable: boolean
  uIndex: number
}

export const BracketItemComponent: React.FC<BracketItemComponentProps> = ({
  setTotalResult,
  disable,
  uIndex
}) => {
  const [result, setResult] = React.useState<ResultType>({
    "_index": 0,
    "home": {
      "name": "",
      "score": 0
    },
    "visitor": {
      "name": "",
      "score": 0
    },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, status: string) => {
    const valueName = e.target.name;

    setTotalResult((prevObj) => ({
      ...prevObj,
      _index: {
        ...prevObj._index,
        ...uIndex
      },
      home: {
        ...prevObj.home,
        ...(status === "home" && { [valueName]: e.target.value })
      },
      visitor: {
        ...prevObj.visitor,
        ...(status === "visitor" && { [valueName]: e.target.value })
      }
    }));

  }


  return (
    <>
      <form className='flex flex-col mb-3'>
        <div>
          <input disabled={disable} className='w-40 h-9 text-zinc-900 pl-3 rounded-tl-2xl border-amber-700 border-2' name='name' type="text" onChange={(e) => onChangeHandler(e, "home")} />
          <input className='w-14 h-9 text-zinc-900 pl-2 rounded-tr-2xl border-amber-700 border-r-2 border-b-2 border-t-2' name='score' type="number" onChange={(e) => onChangeHandler(e, "home")} />
        </div>
        <div>
          <input disabled={disable} className='w-40 h-9 text-zinc-900  rounded-bl-2xl pl-3 border-amber-700 border-l-2 border-r-2 border-b-2' name='name' type="text" onChange={(e) => onChangeHandler(e, "visitor")} />
          <input className='w-14 h-9 text-zinc-900 rounded-br-2xl pl-2 border-amber-700 border-r-2 border-b-2' name='score' type="number" onChange={(e) => onChangeHandler(e, "visitor")} />
        </div>
      </form>
    </>
  )
}