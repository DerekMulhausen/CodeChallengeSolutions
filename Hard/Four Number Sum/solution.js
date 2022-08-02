function fourNumberSum(array, targetSum) {
    // Write your code here.
    let retarr=[]
    array=array.sort((a,b)=>a-b);
    for(let i=0;i<array.length;i++){
      for(let j=i+1;j<array.length;j++){
        for(let k=j+1;k<array.length;k++){
          for(let l=k+1; l<array.length;l++){
            if(array[i]+array[j]+array[k]+array[l]===targetSum){
              retarr.push([array[i],array[j], array[k], array[l]]);
            }
          }
        }
      }
    }
    return retarr;    
  }
  
  // Do not edit the line below.
  exports.fourNumberSum = fourNumberSum;
  