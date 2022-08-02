function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i=0;
    let s=array.length-1;
    while(i<s){
      if(array[i]===toMove){
        while(array[s]===toMove){
          s--;
        }
        if(i>s){
          break;
        }
        let tem=array[i];
        array[i]=array[s]
        array[s]=tem;
        s--;
      }
      i++;
    }
    return array
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  