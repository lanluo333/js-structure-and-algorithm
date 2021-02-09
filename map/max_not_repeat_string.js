/**
 * 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

    示例 1:
    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    事例2：
    输入: s = "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    事例3：
    输入: s = "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// 思路：用滑动的方式从左到右的滑，发现有重复字符串的话就移动指针到下一位

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 初始指针的位置
    const lp = 0;
    // 使用map记录指针移动过程中的各字符的位置
    const map = new Map();
    const max_string_num = 0;
    for(i = 0; i < s.length; i++) {
        // abcddef
        // 如果已经存在重复字符了并且重复字符是在滑动窗口里面的，则移动指针初始位置到重复字符位置
        if(map.has(s[i]) && map.get(s[i]) >= lp) {
            lp = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        max_string_num = Math.max(max_string_num, i - lp + 1);
    }

    return max_string_num;
};

