function findThreeLargestNumbers(array) {
    // Write your code here.
    let big3=[undefined,undefined,undefined];
    array.forEach((n)=>{
      big3=updateLargest(big3, n)
    });
    return big3;
  }
  function updateLargest(big3, n){
    if(big3[2]==undefined||n>big3[2]){
      big3.push(n);
      big3.shift();
    }else if(big3[1]==undefined||n>big3[1]){
      big3[0]=big3[1];
      big3[1]=n;
    }else if(big3[0]==undefined||n>big3[0]){
      big3[0]=n;
    }
    return big3;
  }
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  