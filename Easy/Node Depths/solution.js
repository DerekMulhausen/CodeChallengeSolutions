function nodeDepths(root) {
    // Write your code here.
      let depthSum=0;
      let stack = [{
          node:root,
          depth:0
      }];
      while (stack.length>0){
          let nodeInfo=stack.pop();
          let node=nodeInfo.node;
          let depth=nodeInfo.depth;
          if(node==undefined){
              continue;
          }
          depthSum += depth;
          stack.push({node:node.left,depth:depth+1});
          stack.push({node:node.right,depth:depth+1});
          
      }
      return depthSum;
          
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  