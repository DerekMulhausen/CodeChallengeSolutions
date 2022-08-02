function selectionSort(array) {
    // Write your code here.
    for(let i = 0;i<array.length-1;i++){
      let m=i;
      for(let j=i+1;j<array.length;j++){
        if(array[m]>array[j]){
          m=j;
        }
      }
      array=swap(array,m,i);
  
    }
    return array;
  }
  function swap(array,m,i){
    let t=array[m];
    array[m]=array[i];
    array[i]=t;
    return array;
    
  }
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  