function spiralTraverse(array) {
    // Write your code here.
    let top=0;
    let bottom=array.length-1;
    let left=0;
    let right=array[0].length-1;
    let outArr=[];
  
    while(top<=bottom&&left<=right){
      for(let i=left;i<=right;i++){
        outArr.push(array[top][i]);
      }
      for(let i=top+1;i<=bottom;i++){
        outArr.push(array[i][right]);
      }
      for(let i=right-1;i>=left;i--){
        if(top===bottom)break;
        outArr.push(array[bottom][i]);
      }
      for(let i=bottom-1;i>top;i--){
        if(left===right)break;
        outArr.push(array[i][left]);
      }
      left++;
      top++;
      right--;
      bottom--;
    }
    return outArr;
  }
  
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;
  