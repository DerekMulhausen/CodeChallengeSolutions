function bubbleSort(array) {
    // Write your code here.
    let sorted=false;
    let cnt=0;
    while(!sorted){
      sorted=true;
      for(let i=0;i<array.length-1-cnt;i++){
        if(array[i]>array[i+1]){
          array=swap(i, array);
          sorted=false;
        }
      }
      cnt++;
    }
    return array;
  }
  function swap(i,array){
    const temp=array[i];
    array[i]=array[i+1];
    array[i+1]=temp;
    return array;
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
  