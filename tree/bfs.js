/**
 * 广度优先遍历
 * 利用队列的形式，一次把chidlren放进去，然后一次出队
 */

const tree = {
   val : 'a',
   children : [
      {
         val : 'b',
         children : [
            {
               val : 'c',
               children : []
            },
            {
               val : 'd',
               children : []
            }
         ],
      },
      {
         val : 'e',
         children : [
            {
               val : 'f',
               children : []
            },
            {
               val : 'g',
               children : []
            }
         ],
      }
   ]
}

const bsf = (root) => {
   var q = [root];
   while(q.length > 0) {
      // 出队
      const n = q.shift();
      console.log(n.val); 
      n.children.forEach((child) => {
         q.push(child);
      });
   }
}

bsf(tree);
