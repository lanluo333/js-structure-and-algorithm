// 图的广度优先遍历，使用队列

const graph = require('./graph');

// 从图2开始
var q = [2];
const visited = new Set();
// 把初始在队列的加进已经访问过的列表里
visited.add(2);

while(q.length) {
   let n = q.shift();
   console.log(n);
   graph[n].forEach( c => {
      // 如果没访问过的，就进进队列
      if(!visited.has(c)) {
         q.push(c);
         visited.add(c);
      }
   });
}
