/**
 * 二叉树的最小深度
 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

输入：root = [3,9,20,null,null,15,7]
输出：2
 */

// 使用广度优先遍历

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
   if(!root) return 0;
   // 用数组记录树和层级
   let q = [[root, 1]];
   while(q.length > 0) {
      const [n, l] = q.shift();
      if(!n.left && !n.right) {
         return l;
      }
      if(n.left) q.push([n.left, l + 1]);
      if(n.right) q.push([n.right, l + 1]);
   }
};

