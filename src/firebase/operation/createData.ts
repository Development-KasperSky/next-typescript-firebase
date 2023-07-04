import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../config";

export const createData = async () => {
  const timeStame: string = Date.now().toString();

  const _create = doc(dataBase, `create-data/${timeStame}`);

  const createData = {
    _index: 0,
    home: {
      name: "",
      score: 0,
    },
    visitor: {
      name: "",
      score: 0,
    },
  };

  try {
    await setDoc(_create, createData);
  } catch (error) {
    console.log("An error to add data!");
  }
};
