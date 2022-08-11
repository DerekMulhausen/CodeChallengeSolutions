function mergeOverlappingIntervals(array) {
    // Write your code here.
    //sort by lowest first number
    array=array.sort((a,b)=>a[0]-b[0]);
    //iterate through sorted array and push new
    //values to new array.  Remember to account for
    //daisy chaining[[1,2],[2,3],[3,4]] should become [1,4]
    let outArr=[array[0]];
    let j=0;
    for(let i=1;i<array.length;i++){
      if(array[i][0]<=outArr[j][1]){
        if(outArr[j][1]<array[i][1]){
          outArr[j][1]=array[i][1];
        }
      }else{
        j++;
        outArr.push(array[i])
      }
    }
    