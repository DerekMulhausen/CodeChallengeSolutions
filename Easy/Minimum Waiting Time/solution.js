function minimumWaitingTime(queries) {
    // Write your code here.
      queries.sort((a,b)=> a-b);
      let wait=0;
      let total=0
      if(queries.length>1){
          console.log(queries);
          for(let i=1;i<queries.length;i++){
              wait+=queries[i-1];
              total+=wait;
          }
      }
    return total;
  }
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;
  