function binarySearch(array, target) {
    // Write your code here.
    let left=0;
    let right=array.length-1;
    let mid=parseInt((right-left)/2);
    while(true){
      if(right-left<2){
        if(array[right]==target){
          return right;
        }else if(array[left]==target){
          return left;
        }else{
          return -1;
        }
      }
      if(target==array[mid]){
        return mid;
      }else if(target<array[mid]){
        right=mid;
      }else{
        left=mid;
      }
      mid=parseInt((right+left)/2);
    }
  
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  