// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      sums=[];
      branchSumsHelper(root, 0, sums);
      return sums;
  }
  function branchSumsHelper(tree, sum, sums){
      sum+=tree.value
      if(tree.left==null&&tree.right==null){
          sums.push(sum);
          return
      }
      console.log(tree.left)
      if(tree.left!=null){
          branchSumsHelper(tree.left, sum, sums);
      }
      if(tree.right!=null){
          branchSumsHelper(tree.right, sum, sums);
      }
  }
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  