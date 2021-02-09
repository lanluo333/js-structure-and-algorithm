/**
 * 最小堆,父节点的值小于等于子节点
 */

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
      if(this.heap[parentIndex] > this.heap[index]) {
         this.swap(parentIndex, index);
         this.shiftUp(parentIndex);
      }
   }

   // 下移
   shiftDown(index){
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if(this.heap[leftIndex] < this.heap[index]) {
         this.swap(leftIndex, index);
         this.shiftDown(leftIndex);
      }

      if(this.heap[rightIndex] < this.heap[index]) {
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

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
