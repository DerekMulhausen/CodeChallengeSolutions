// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
      let cur=linkedList
      while(cur!==null){
          let nextnode=cur.next;
          while(nextnode?.value===cur.value){
              nextnode=nextnode.next;
          }
          cur.next=nextnode;
          cur=nextnode;
      }
    return linkedList;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  