/**
 * 两数相加
 
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

事例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

思路：
由于输入的两个链表都是逆序存储数字的位数的，因此两个链表中同一位置的数字可以直接相加。

我们同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。具体而言，如果当前两个链表处相应位置的数字为 n1,n2n1,n2，进位值为
（n1 + n2 + carry）% 10。
（n1 + n2 + carry）% 10。

如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 00 。

此外，如果链表遍历结束后，有 \textit{carry} > 0carry>0，还需要在答案链表的后面附加一个节点，节点的值为 \textit{carry}carry。

 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   // 创建一个链表
   const l3 = new ListNode(0);
   let p1 = l1;
   let p2 = l2;
   let p3 = l3;
   let carry = 0;
   // 遍历链表
   while(p1 || p2) {
      const v1 = p1 ? p1.val : 0;
      const v2 = p2 ? p2.val : 0;
      const val = v1 + v2 + carry;
      carry = Math.floor(val / 10);
      if(p1) p1 = p1.next;
      if(p2) p2 = p2.next;
      p3.next = new ListNode(val % 10);
      p3 = p3.next;
   }

   // 如果进位还有值，就把进位的值添加进去
   if(carry) {
      p3.next = new ListNode(carry);
   }

   return l3.next;
};
