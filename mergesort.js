function split(wholeArray) {
  let temp = wholeArray.length / 2;
  let firstHalf = wholeArray.slice(0, temp);
  let secondHalf = wholeArray.slice(temp);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  return [...arr1, ...arr2];
}

function mergeSort(array) {
  /* your code here */
}

