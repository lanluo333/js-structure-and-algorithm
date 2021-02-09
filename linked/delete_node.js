/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 * 示例1：
 * 输入：head = [4,5,1,9], node = 5
   输出：[4,1,9]
   解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

   示例2：
   输入：head = [4,5,1,9], node = 1
   输出：[4,5,9]
   解释：给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
   // 链表只知道下个节点，不知道上一个节点
   // 所以我们可以把当前要删除的下一个节点的值转移到此时的节点，然后删除下一个节点
   // 这要就变相的删除的这个节点
   node.val = node.next.val
   node.next = node.next.next
};

