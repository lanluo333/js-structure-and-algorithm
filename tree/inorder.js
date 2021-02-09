/**
 * 中序遍历
 * 顺序为： 左 - 跟 - 右
 */

const bt = require('./bt');

/*
const inorder = (root) => {
   if(!root) return;
   inorder(root.left);
   console.log(root.val);
   inorder(root.right);
}*/

// 非递归版
const inorder = (root) => {
   if(!root) return;
   let p = root;
   var stack = [];
   while(stack.length > 0 || p) {
      while(p) {
         stack.push(p);
         p = p.left;
      }
      const n = stack.pop();
      console.log(n.val);
      p = n.right;
   }
}

inorder(bt);
