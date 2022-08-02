function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      let rsh=redShirtHeights;
      let bsh=blueShirtHeights
      rsh.sort((a,b)=>a-b);
      bsh.sort((a,b)=>a-b);
      if(rsh[rsh.length-1]>bsh[bsh.length-1]){
          for(let i=0;i<rsh.length;i++){
              if(bsh[i]>=rsh[i]){
                  return false;
              }
          }
          return true;
      }else{
          for(let i=0;i<bsh.length;i++){
              if(rsh[i]>=bsh[i]){
                  return false;
              }
          }
          return true;
      }
      
  
  }
  
  // Do not edit the line below.
  exports.classPhotos = classPhotos;
  