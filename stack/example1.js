
/**
 * 有效的括号
 
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

事例1：
输入: "()"
输出: true

事例2：
输入: "()[]{}"
输出: true

事例3：
输入: "(]"
输出: false

事例4：
输入: "([)]"
输出: false

事例5：
输入: "{[]}"
输出: true

 */

// 使用栈的方式来判断，越靠后的左括号对应越靠前的右括号
var isVaild = function(s) {
   if(s.length % 2 === 1) return false;

   const stack = [];
   for(let i = 0; i < s.length; i++) {
      const c = s[i];
      if(c === '(' || c === '{' || c === '[') {
         stack.push(c);
      }else {
         // 判断顶栈是否和遇到的第一个括号匹配
         const t = stack[stack.length - 1];
         if(t === '(' && c === ')' || t === '{' && c === '}' || t === '[' && c === ']') {
            stack.pop();
         }else {
            return false;
         }
      }
   }

   return stack.length === 0;
}


