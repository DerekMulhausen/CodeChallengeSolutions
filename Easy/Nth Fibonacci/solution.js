function getNthFib(n) {
    // Write your code here.
      let a=0;
      let b=1;
      let c=1;
      
      if(n==1){
          return 0;
      }else if(n==2){
          return 1;
      }else{
          for(let i=3;i<=n;i++){
              c=a+b;
              a=b;
              b=c;
          }
          return c;
      }
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  