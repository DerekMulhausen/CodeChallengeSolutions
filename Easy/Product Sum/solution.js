// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth=1) {
    // Write your code here.
      let sum=0;
      for(let elem of array){
          if(Array.isArray(elem)){
              sum+=productSum(elem, depth+1);
          }else{
              sum+=elem;
          }
      }
      return sum*depth;
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;
  