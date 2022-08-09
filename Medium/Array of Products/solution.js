/*
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the 
output array is equal to the product of every other number in the input array.
*/
function arrayOfProducts(array) {
    // Write your code here.
    let retArr=[];
    for(let i=0;i<array.length;i++){
      let prod=1;
      for(let j=0;j<array.length;j++){
        if(j!==i){
          prod*=array[j];
        }
      }
      retArr.push(prod);
    }
    return retArr;
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;
  