/**
 * 插入排序
 */

Array.prototype.insertionSort = function() {
   for(let i = 0; i < this.length; i++) {
      const tmp = this[i];
      let j = i;
      while(j > 0) {
         if(this[j - 1] > tmp) {
            this[j] = this[j-1];
         }else {
            break;
         }
         j--;
      }
      this[j] = tmp;
   }
}

const arr = [5,4,3,2,1];
arr.insertionSort();
console.log(arr);
