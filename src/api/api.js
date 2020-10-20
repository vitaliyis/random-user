import {getRandomInRange} from "../utils/utils";

export const fetchGetData = () => {
  return fetch(`https://randomuser.me/api/1.3/?results=${getRandomInRange(1, 1000)}`)
    .then(response => response.json())
    .catch(err => {
      console.log('err fetch => ', err);
      throw new Error(err);
    })
}