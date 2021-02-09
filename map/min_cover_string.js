/**
 * 最小覆盖子串

  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

  事例1：
  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC"

  事例2：
  输入：s = "a", t = "a"
  输出："a"

 */


// 思路：采用左右两个指针来滑动，右指针先滑，滑到满足所以字符之后，再尝试开始左移动，找出最小的那个

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 声明两个指针初始位置
    let lp = 0;
    let rp = 0;
    const need = new Map();
    // 记录需要的字符串和数量
    for(let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1);
    }

    // 需要的字符种类个数
    let needType = need.size;

    let res = '';
    // 开始移动
    while(rp < s.length) {
        const c = s[rp];
        // 如果存在，则减去相应的数量
        if(need.has(c)) {
            need.set(c, need.get(c) - 1);
            if(need.get(c) === 0) needType -= 1;
        }

        // 如果匹配满足一轮了，则开始尝试左移
        while(needType === 0) {
            // 截取满足的部分，并和之前的比较长短
            let newRes = s.substring(lp, rp + 1);
            if(!res || res.length > newRes.length) res = newRes;
            // 如果移动左边发现是满足需要匹配的字符，则把其数量加回去，好继续进行右移
            const c2 = s[lp];
            if(need.has(c2)) {
                need.set(c2, need.get(c2) + 1);
                if(need.get(c2) === 1) needType += 1;
            }
            lp++;
        }

        rp ++;
    }


    return res;
};


