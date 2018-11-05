function bubbleSort(array) {

  if (array.length > 1){
    for (let i = 0; i < array.length; i++){
      let j = i + 1;
      if(array[i] > array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
