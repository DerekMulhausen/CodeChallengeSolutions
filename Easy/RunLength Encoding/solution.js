function runLengthEncoding(string) {
    // Write your code here.
    let outstr='';
    let i=0;
    while(i<string.length){
      let cur=string[i];
      let cnt=0;
      while (i<string.length&&cnt<9&&cur==string[i]){
        i++;
        cnt++;
      }
      outstr+=cnt+cur;
    }
    return outstr;    
  }
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  