/**
 * 
 * 动态规划
 * 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

 */

// 解析：细细观察的话，其实不难发现，当n大于2的时候，第n阶台阶有多少中方法就是 n-1和n-2阶台阶爬法之和，以此类推，其实就是
// F(n) = F(n-1) + F(n-2)的方程

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if(n < 2) return 1;
   
   // 假设0阶有1种方法，1阶的话其实也是只要一种方法,2阶的时候就是2-1和2-2阶的和
   const arr = [1,1];

   for(let i = 2; i <= n; i++) {
       arr[i] = arr[i-1] + arr[i-2];
   }

   return arr[n];
};