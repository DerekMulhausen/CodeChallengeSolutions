function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let repchars=[];
    if(string.length==0){
      return -1;
    }else{
      let unique;
      for(let i=0;i<string.length;i++){
        unique=true;
        for(let j=i+1;j<string.length;j++){
          if(string[i]===string[j]){
            unique=false;
            repchars.push(string[i]);
            break;
          }
        }
        if(unique&&repchars.indexOf(string[i])===-1){
          return i;
        }
      
      }
      return -1;
    }
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  