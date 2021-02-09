/**
 * 选择排序
 */

Array.prototype.selectionSort = function() {
   for(let i = 0; i < this.length - 1; i++) {
      let indexMin = i;
      for(let j = i; j < this.length; j++) {
         if(this[indexMin] > this[j]) {
            indexMin = j;
         }
      }

      if(indexMin !== i) {
         let tmp = this[indexMin];
         this[indexMin] = this[i];
         this[i] = tmp; 
      }
   }
}

const arr = [5,4,3,2,1];
arr.selectionSort();
console.log(arr);
