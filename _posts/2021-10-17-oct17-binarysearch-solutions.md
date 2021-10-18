---
layout: default
title: October 18 - Binary Search Game Solutions
date: 2021-10-17 00.00.00 -0400
categories: binary-search all-group
current_page: lessons
code_editor: true
---

# October 18 - Binary Search Game Solutions

[Last meeting's binarysearch.io game](https://binarysearch.com/room/C++-go-brrr-rW51rAVWqv?questionsetIndex=0){:target="_blank"} was a blast! Congratulations to the winners and everyone else who played!

Here are the solutions for the round.

### Problem 1 - Square of a List

**Problem Link**: [https://binarysearch.com/problems/Square-of-a-List](https://binarysearch.com/problems/Square-of-a-List){:target="_blank"}

<div is="code-editor" id="solution-1">
class Solution:
    def solve(self, nums):
        squared_nums = []
        for number in nums:
            squared_nums.append(number ** 2)
        squared_nums.sort()
        return squared_nums

solution = Solution()
print(solution.solve(list(map(int, input().split())))
#####
-9 -2 0 2 3
</div>
