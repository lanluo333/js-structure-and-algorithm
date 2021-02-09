/**
 * 前k个高频元素

   给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
   示例 1:
   输入: nums = [1,1,1,2,2,3], k = 2
   输出: [1,2]

   示例 2:
   输入: nums = [1], k = 1
   输出: [1]

   提示：

   你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
   你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
   题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
   你可以按任意顺序返回答案。

 */

// 使用最小堆的方式获取前k个元素
class MinHeap{
   constructor(){
      this.heap = [];
   }

   // 交换
   swap(i1, i2){
      const temp = this.heap[i1];
      this.heap[i1] = this.heap[i2];
      this.heap[i2] = temp;
   }

   // 获取指定节点的父节点
   getParentIndex(i){
      // 右移1位，意思是 Math.floor((i - 1) / 2)
      return (i - 1) >> 1;
   }

   // 获取左侧子节点
   getLeftIndex(i){
      return i * 2 + 1;
   }

   // 获取右侧子节点
   getRightIndex(i) {
      return i * 2 + 2;
   }

   // 上移节点，直到父节点小于等于当前值
   shiftUp(index){
      if(index == 0) return;
      const parentIndex = this.getParentIndex(index);
      if(this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
         this.swap(parentIndex, index);
         this.shiftUp(parentIndex);
      }
   }

   // 下移
   shiftDown(index){
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if(this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
         this.swap(leftIndex, index);
         this.shiftDown(leftIndex);
      }

      if(this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
         this.swap(rightIndex, index);
         this.shiftDown(rightIndex);
      }
   }

   insert(value){
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
   }

   // 删除堆顶
   // 用数组尾部元素替换堆顶（直接删除会破坏结构）
   // 然后下移，将新堆顶和他的子元素进行交换，直到子元素大于等于这个新堆顶
   pop(){
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
   }

   // 获取堆顶
   peek(){
      return this.heap[0];
   }

   // 获取堆的大小
   size(){
      return this.heap.length;
   }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   const map = new Map();
   nums.forEach(n => {
      map.set(n, map.has(n) ? map.get(n) + 1 : 1);
   });

   const h = new MinHeap();
   map.forEach((value, key) => {
      h.insert({value, key});
      if(h.size() > k) {
         h.pop();
      }
   });

   return h.heap.map(a => a.key);
};

const nums = [1,1,1,2,2,3];
const k = 2;
const res = topKFrequent(nums, k);
console.log(res);

