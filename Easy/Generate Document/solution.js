function generateDocument(characters, document) {
    // Write your code here.
    if(characters.length<document.length){
      return false;
    }else{
      for(let i=0;i<document.length;i++){
        let pos=characters.indexOf(document[i]);
        if(pos>=0){
          characters=characters.slice(0,pos)+characters.slice(pos+1);
        }else{
          return false;
        }
      }
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  