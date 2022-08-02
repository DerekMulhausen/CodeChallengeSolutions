function isPalindrome(string) {
    // Write your code here.
    let l=0;
    let r=string.length-1
    while(l<=r){
      if(string[l]!==string[r]){
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  