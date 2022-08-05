function longestPeak(array) {
    // Write your code here.
    let maxPeak=0;
    let i=1;
    while(i<array.length-1){
      //find peak
      const peak=array[i-1]<array[i]&&array[i]>array[i+1];
      if(!peak){
        i++;
        continue;
      }
      //else peak found
      lt=i-2;
      while(lt>=0 && array[lt]<array[lt+1]){
        lt--;
      }
      let rt=i+2;
      while(rt<array.length&&array[rt]<array[rt-1]){
        rt++;
      }
      const curPeak=rt-lt-1;
      if(curPeak>maxPeak){
        maxPeak=curPeak
      }
      i=rt;
    }
    return maxPeak;
  }
  
  // Do not edit the line below.
  exports.longestPeak = longestPeak;
  