import React from "react";
import { InputTeamCountComponent } from "./InputTeamCount";

interface ControlPanelComponentProps {
  onClickHandler: (data: number) => void,
}

export const ControlPanelComponent: React.FC<ControlPanelComponentProps> = ({
  onClickHandler
}) => {
  return (
    <div className="flex flex-row border-b-2 mb-10">
      <InputTeamCountComponent onClickHandler={onClickHandler} />
      <button className="text-white ml-3 w-50 h-9 bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700">Show result</button>
    </div>
  )
}