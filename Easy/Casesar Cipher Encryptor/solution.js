function caesarCipherEncryptor(string, key) {
    // Write your code here.
    key=key%26;
    let str='';
    for (let i=0;i<string.length;i++){
      let ch=string.charCodeAt(i)+key;
      if (ch>122){
        str+=String.fromCharCode(ch-26);
      }else{
        str+=String.fromCharCode(ch);
      }
    }
    return str;  
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  