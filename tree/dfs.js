/**
 * 深度优先遍历
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

const dsf = (root) => {
   console.log(root.val);
   // root.children.forEach((child) => {dfs(child)});
   root.children.forEach(dsf);
}

dsf(tree);
