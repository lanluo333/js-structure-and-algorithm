/**
 * 先序遍历
 * 顺序为： 根 - 左 - 右
 */
const bt = require('./bt');

/*
const preorder = (root) => {
   if(!root) return null;
   console.log(root.val);
   preorder(root.left);
   preorder(root.right);
};

*/

// 非递归实现，使用堆栈的形式
const preorder = (root) => {
   if(!root) return;
   var stack = [root];
   while(stack.length > 0) {
      const n = stack.pop();
      console.log(n.val);
      // 堆栈后进先出，所以先放右的进去再放左的
      if(n.right) stack.push(n.right);
      if(n.left) stack.push(n.left);
   }
}

preorder(bt);