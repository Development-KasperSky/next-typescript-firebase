import React from "react";

interface InputComponentProps {
  onClickHandler: (data: number) => void,
}

export const InputTeamCountComponent: React.FC<InputComponentProps> = ({
  onClickHandler
}) => {

  const [teamCount, setTeamCount] = React.useState<number>(0);
  const onChangeTeamCounter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setTeamCount(value);
    }
  }

  const onClickGenerate = () => {
    onClickHandler(teamCount);
  }

  return (
    <div>
      <input className='w-20 h-9 text-zinc-900 rounded-sm border-amber-700 border-2 mb-3 mr-3' name='second_score' type="number" onChange={onChangeTeamCounter} />
      <button className='text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700' onClick={onClickGenerate}>Generate</button>
    </div>
  )
}