function decreaseLength(countriesArray) {
  let dataArr = [];
  const max = countriesArray.length >= 48 ? 48 : countriesArray.length;
  for (let i = 0; i < max; i++) {
    dataArr.push(countriesArray[i]);
  }

  return dataArr;
}

export default decreaseLength;
