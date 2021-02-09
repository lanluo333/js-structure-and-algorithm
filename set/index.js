// 去重
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set1 = new Set(arr);
const has = set1.has(1);

// 求交集
const set2 = new Set([2,3]);
const set3 = new Set([...set1].filter(item => set2.has(item)));
