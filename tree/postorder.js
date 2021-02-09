/**
 * 后序遍历
 * 顺序： 左 - 右 - 跟
 */

const bt = require('./bt');

/*
const postorder = (root) => {
   if(!root) return;
   postorder(root.left);
   postorder(root.right);
   console.log(root.val);
}*/

// 非递归版
const postorder = (root) => {
   // 后序遍历是左-右-根，如果我们倒过来的话(根-右-左)就和先序遍历（根-左-右）的差不多
   // 用两个堆栈，一个负责输出
   if(!root) return;
   var stack = [root];
   var output = [];
   while(stack.length > 0) {
      n = stack.pop();
      output.push(n);
      if(n.left) stack.push(n.left);
      if(n.right) stack.push(n.right);
   }

   // 因为之前的数组是倒序进去的，所以这里直接堆栈出来即可
   while(output.length > 0) {
      const out_n = output.pop();
      console.log(out_n.val);
   }
}

postorder(bt);

