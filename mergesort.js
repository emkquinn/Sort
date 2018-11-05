function split(wholeArray) {
  for (let i = 0; i < wholeArray.length; i++) {
    // if (Array.isArray(wholeArray[i])) {
    //   return split(wholeArray[i]);
    // } else {
      let temp = wholeArray.length / 2;
      let firstHalf = wholeArray.slice(0, temp);
      let secondHalf = wholeArray.slice(temp);
      return [firstHalf, secondHalf];
  //   }
  }
}

function merge(arr1, arr2) {
  return [...arr1, ...arr2];
}

function mergeSort(array) {
  let splitArr = split(array);
  let tempArr = [];
  if (array.length === 1) return array;
  if (splitArr.length === array.length) {
    for (let i = 0; i < splitArr.length; i++) {
      let j = i + 1;
      if (splitArr[i] > splitArr[j]) {
        tempArr = merge(splitArr[i], splitArr[j]);
      } else {
        tempArr = merge(splitArr[j], splitArr[i]);
      }
      splitArr = splitArr.splice(i, 2, tempArr);
    }
  } else {
      return splitArr.map(elem => split(elem));
  }
}
