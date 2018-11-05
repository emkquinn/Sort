function bubbleSort(array) {
  function swap (arr1, arr2){
    return [arr2, arr1]
  }
  if (array.length > 1){
    for (let i = 0; i < array.length; i++){
      let j = i + 1;
      if (array[i] > array[j]){
        swap(array[i], array[j]);
      }
    }
  }
  return array;
}
