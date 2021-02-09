// 图的深度遍历
const graph = require('./graph');

// 访问图的值，然后访问图的 相邻的 并且 没有被访问过的图
const visited = new Set();
const dfs = (n) => {
   console.log(n);
   visited.add(n);
   graph[n].forEach(element => {
      if(!visited.has(element)) {
         dfs(element);
      }
   });
}

// 从值为2的图开始
dfs(2);

