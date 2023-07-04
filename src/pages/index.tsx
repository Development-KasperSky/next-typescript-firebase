import { BracketItemComponent, ControlPanelComponent } from '@/components';
import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [totalCount, setTotalCount] = React.useState<number>(0);

  const handleTotalCountChange = (data: number) => {
    if ((Math.log2(data) === Math.floor(Math.log2(data)) && (Math.log2(data) >= 1))) {
      setTotalCount(data);
    } else {
      alert("Total count is not correct!");
    }
  }

  const stepCountArray = [];

  for (let j = 0; j < Math.ceil(Math.log2(totalCount)); j++) {
    stepCountArray.push(j + 1);
  }

  const matchList = React.useMemo(() => {
    let result: any[] = [];

    for (let i = 0; i < Math.ceil(Math.log2(totalCount / 2)) + 1; i++) {
      const length = Math.pow(2, i);
      result = [new Array(length).fill(0), ...result];
    }

    return result;
  }, [totalCount]);

  return (
    <>
      <ControlPanelComponent onClickHandler={handleTotalCountChange} />
      {
        <div className='flex flex-row gap-7'>
          {
            stepCountArray.map((step, sIndex) => (
              <div className='flex flex-col justify-around' key={sIndex}>
                {
                  matchList[sIndex].map((item: any, index: React.Key | null | undefined) => (
                    <BracketItemComponent disable={sIndex === 0 ? false : true} key={index} />
                  ))
                }
              </div>
            ))
          }
        </div>
      }
    </>
  )
}