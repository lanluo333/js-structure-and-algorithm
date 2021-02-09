/**
 * 二叉树的最大深度
 * 
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，
  3
   / \
  9  20
    /  \
   15   7

返回它的最大深度 3 。

 */

// 使用深度优先遍历
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   let res = 0;
   const dsf = (n, l) => {
      if(!n) return;
      if(l > res) {
         res = l;
      }
      dsf(n.left, l + 1);
      dsf(n.right, l + 1);
   };

   dsf(root, 1);
   return res;
};



