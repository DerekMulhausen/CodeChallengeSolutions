function nonConstructibleChange(coins) {
    // Write your code here.
      coins.sort((a,b)=>a-b);
      let tot=parseInt(0);
      for(let i=0;i<coins.length;i++){
          console.log(coins[i] + '|' + tot);
          if (coins[i]>tot+1){
              return tot+1;
          }
          tot+=coins[i];
      }
      return tot+1;
  
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  