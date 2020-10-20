import {NORMAL, SORT_ASC, SORT_DESC} from "../constans/constans";

export const getSumGender = (arr, gender) => {
  let result = 0;

  if (arr.length) {
    arr.forEach(item => {
      if (item.gender === gender) result++;
    })
  }

  return result;
}

export const getMaxGender = (male, female, indeterminate) => {
  if (male > female && male > indeterminate) return "Men predominate";
  if (female > male && female > indeterminate) return "Women predominate";
  if (indeterminate > male && indeterminate > female) return "Indeterminate predominate";

  if (male === female && male > indeterminate) return "Men and female are equal";
  if (male === female && male === indeterminate) return "Men and female and indeterminate are equal";

  if (indeterminate === female && indeterminate > male) return "Indeterminate and women are equal";
  if (indeterminate === male && indeterminate > female) return "Indeterminate and men are equal";
}

export const getStatisticNationalities = data => {
  const result = [];
  let isFind = false;

  data.forEach(item => {
    if (!result.length) {
      result.push({
        name: item.nat,
        quantity: 1
      })
    } else {
      for (let i = 0; i < result.length; i++) {
        if (item.nat === result[i].name) {
          result[i].quantity++;
          isFind = true;
          break;
        }
      }
      if (!isFind) {
        result.push({
          name: item.nat,
          quantity: 1
        })
      }
      isFind = false;
    }
  })

  return result;
}

export const getListNationalities = data => {
  const result = [];
  let isFind = false;
  let idNat = 0;

  data.forEach(item => {
    if (!result.length) {
      result.push({
        id: idNat,
        name: 'Nationality',
        value: ''
      });
    } else {
      for (let i = 0; i < result.length; i++) {
        if (item.nat === result[i].name) {
          isFind = true;
          break;
        }
      }
      if (!isFind) {
        result.push({
          id: idNat++,
          name: item.nat,
          value: item.nat
        })
      }
      isFind = false;
    }
  })

  return result;
}

export const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const transformDate = str => {
  let date = new Date(str);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
    hour:'2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
}

export const getDataWithFullName = data => {
  return data.map(item => {
    item.fullName = `${item.name.first} ${item.name.last}`;
    return item;
  });
}

export const sortByUp = key => (prev, next) => {
  if (prev[key] < next[key]) return -1
  if (prev[key] > next[key]) return 1
}

export const sortByDown = key => (prev, next) => {
  if (prev[key] > next[key]) return -1
  if (prev[key] < next[key]) return 1
}

export const sortByString = (data, sortCondition) => {
  switch (sortCondition){
    case SORT_ASC:
      return [...data].sort(sortByUp('fullName'));
    case SORT_DESC:
      return [...data].sort(sortByDown('fullName'));
    case NORMAL:
      return data;
    default:
      return data;
  }
}

export const getDataByCurrentPage = (data, sizePage, currentPage) => {
  const beginPage = sizePage * currentPage - sizePage;
  const endPage = sizePage * currentPage;
  return data.slice(beginPage, endPage);
}

export const filterData = (data, mark) => {
  if (mark) {
    return data.filter(item => item.fullName.includes(mark));
  } else {
    return data;
  }
}

export const getQuantityPage = data => {
  if (data.length) { return Math.ceil(data.length / 50) }
}