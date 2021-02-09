/**
 * 二叉树的层序遍历
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   // 使用广度优先算法
   if(!root) return [];
   var q = [[root, 0]];
   var res = [];
   while(q.length) {
      const [n, level] = q.shift();
      if(!res[level]) {
         res.push([n.val]);
      }else {
         res[level].push(n.val);
      }

      if(n.left) q.push([n.left, level + 1]);
      if(n.right) q.push([n.right, level + 1]);
   }

   return res;
};

