import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../config";

import { ResultType } from "@/Models";

export const createData = async (data: ResultType) => {
  const timeStamp: string = Date.now().toString();

  const _create = doc(dataBase, `create-data/${timeStamp}`);

  try {
    await setDoc(_create, data);
  } catch (error) {
    console.log("An error to add data!");
  }
};
