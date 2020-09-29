# interview-algorithm
> 记录前端面试算法题目详解

**目录**

- [Lost Three Nums](#lost-three-nums)
- [Divide Two Integers](#divide-two-integers)
- [Random Numbers](#random-numbers)
- [Longest Common Prefix](#longest-common-prefix)
- [Most Time Letter](#most-time-letter)
- [Search Insert Position](#search-insert-position)
- [Maximum Subarray](#maximum-subarray)


## Lost Three Nums
随机从一组数组（数组内的数据为从1到n，且n为正整数）里，删除三个数，要求找到丢失的三个数，且运行较快。采用map记录仍在数组内的数据，再循环遍历n长度的数组，若数组内的数不在map内，则该数为丢失的数字。

## Divide Two Integers
两个整数相除，要求不能使用 *，/，以及mod操作符，返回除数，若除数有小数点，只返回整数部分，如2.789，只应返回2，此题为leetcode上的题目

## Random Numbers
用计算机生成了N个1到1000之间的随机整数，对于其中重复的数字，只保留一个，把其余相同的数去掉，再把这些数从小到大排序。解法二性能更优，耗时1ms左右，而解法一曾出现最大耗时23ms

## Longest Common Prefix
取数组内所有字符串最长的相同前缀，此题为leetcode上的题目

## Most Time Letter
计算出字符串中出现次数最多的字符是什么，出现了多少次？

## Search Insert Position
插入特定的数字到已排序好的数组内，返回该数应插入数组内的索引位置

## Maximum Subarray
数组中，对其中连续一组数据相加，求最大的和值
