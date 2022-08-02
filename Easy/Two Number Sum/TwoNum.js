function twoNumberSum(array, targetSum) {
    // Write your code here.
      let aPos=0;
      let bPos=1;
      while(aPos<array.length-1){
          while(bPos<array.length){
              if(array[aPos]+array[bPos]===targetSum) return [array[aPos],array[bPos]];
              bPos++;
          }
          aPos++;
          bPos=aPos+1;
      }
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;