function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let ret=[];
    let min=undefined;
  
    for (let i=0;i<arrayOne.length;i++){
      for(let j=0;j<arrayTwo.length;j++){
        let temp=Math.abs(arrayOne[i]-arrayTwo[j]);
        if(temp<min||min===undefined){
          min=temp;
          ret=[arrayOne[i],arrayTwo[j]];
        }
      }
    }
    
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;
  