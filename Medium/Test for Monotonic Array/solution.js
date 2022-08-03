function isMonotonic(array) {
    // Write your code here.
    if(array.length>2){
      let increasing=undefined;
      let i=1;
      while(i<array.length&&increasing===undefined){
        if(array[i]===array[i-1]){
          i++;
        }else{
          if(array[i]>array[i-1]){
            increasing=true;
          }else{
            increasing=false;
          }
        }
      }
      if(increasing===undefined){
        return true;
      }else{
        for(i=1;i<array.length;i++){
          if(increasing){
            if(array[i-1]>array[i]){
              return false;
            }
          }else if(array[i]>array[i-1]){
            return false;
          }
        }
      }
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  