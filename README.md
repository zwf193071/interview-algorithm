
## interview-algorithm
> 记录前端面试算法题目详解

* [Lost Three Nums]](#Lost Three Nums)
* [Divide Two Integers](#Divide Two Integers)


## Lost Three Nums
随机从一组数组（数组内的数据为从1到n，且n为正整数）里，删除三个数，要求找到丢失的三个数，且运行较快。采用map记录仍在数组内的数据，再循环遍历n长度的数组，若数组内的数不在map内，则该数为丢失的数字。

## Divide Two Integers
两个整数相除，要求不能使用 *，/，以及mod操作符，返回除数，若除数有小数点，只返回整数部分，如2.789，只应返回2，此题为leetcode上的题目