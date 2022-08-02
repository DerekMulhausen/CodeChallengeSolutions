function sortedSquaredArray(array) {
    // Write your code here.
      let retArr=[];
      let start=0;
      let end=array.length-1;
      while (start<=end){
          if(Math.abs(array[start])>Math.abs(array[end])){
              retArr.unshift(array[start]**2);
              start++;
          }else{
              retArr.unshift(array[end]**2);
              end--;
          }
      }
      //retArr.sort;
    //return array.map(x=>x**2);
      return retArr;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;