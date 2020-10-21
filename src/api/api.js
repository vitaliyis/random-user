import {getRandomInRange} from "../utils/utils";

export const fetchGetData = () => {
  return fetch(`https://randomuser.me/api/1.3/?results=${getRandomInRange(1, 1000)}`, {mode: "cors"})
    .then(response => response.json())
    .catch(err => {
      console.error('err fetch => ', err);
      return err;
    })
}