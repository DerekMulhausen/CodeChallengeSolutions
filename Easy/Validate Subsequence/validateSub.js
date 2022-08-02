function isValidSubsequence(array, sequence) {
    // Write your code here.
      let aPos=0;
      let sPos=0;
      while(aPos<array.length && sPos < sequence.length){
          if (array[aPos]===sequence[sPos]) sPos++;
          aPos++;
      }
          return sPos===sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;