function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      let rs=redShirtSpeeds;
      let bs=blueShirtSpeeds;
      rs.sort((a,b)=>a-b);
      if(fastest){
          bs.sort((a,b)=>b-a);	
      }else{
          bs.sort((a,b)=>a-b);	
      }
      let total=0;
      for(let i=0;i<rs.length;i++){
          total+=Math.max(rs[i], bs[i]);
      }
    return total;
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  