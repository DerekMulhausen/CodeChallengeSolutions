function insertionSort(array) {
    // Write your code here.
    for(let i=1;i<array.length;i++){
      let j=i;
      while (j>0 && array[j]<array[j-1]){
        array=swap(array,j);
        j--;
      }
    }
    return array;
  }
  function swap(array,j){
    let t=array[j];
    array[j]=array[j-1];
    array[j-1]=t;
    return array;
  }
  
  // Do not edit the line below.
  exports.insertionSort = insertionSort;
  