# LeetLab: LeetCode Problem Solutions

## Overview
Welcome to LeetLab, my personal repository featuring solutions to over 50 LeetCode problems. This collection primarily focuses on string and array-related challenges, utilizing various algorithms such as two pointers, sliding window, dynamic programming, and more. The repository serves as a testament to my commitment to honing problem-solving skills and mastering diverse algorithms. </br>

Feel free to reach out if you come up with a better solution in terms of time or space complexity!

## Table of Contents

| Company   | ID | Platform      | Problem                                                                                                                  | Type                  | Level  | Language | time/ space<br>complexity                                                                                                  | Tag                                     |
| --------- | -- | ------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Meta      | 1  | Leetcode 953  | Verifying an Alien Dictionary                                                                                            | hashmap               | Easy   | JS       | TC: O(n\*m)<br>SC: O(1)                                                                                                    |                                         |
| Microsoft | 2  | Leetcode 344  | Reverse String<br>                                                                                                       | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 3  | Leetocode 867 | Transpose Matrix                                                                                                         | array                 | Easy   | JS       | TC: O(rows \* cols)<br>SC: O(rows \* cols)                                                                                 |                                         |
| Microsoft | 4  | Leetocode 1   | Two Sum                                                                                                                  | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 5  | Leetcode 15   | Three Sum                                                                                                                | array                 | Medium | JS       | TC: O(n^2)<br>SC: O(1) or O(n)<br>(SC: depends on the sorting library, it could allocate extra memory)                     |                                         |
| Microsoft | 6  | Leetcode 167  | Two Sum II - input is sorted                                                                                             | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)<br>(SC: it does not use additional data structures whose space requirements depend on the input size) |                                         |
| Microsoft | 7  | Leetcode 167  | Valid Palindrome<br>                                                                                                     | string                | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| Microsoft | 8  | Leetcode 680  | Valid Palindrome II                                                                                                      | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 9  | Leetcode 1304 |  Find N Unique Integers Sum up to Zero                                                                                   | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n) (size of res depends on n)                                                                            |                                         |
| Meta      | 10 | Leetcode 136  | Single Number<br>                                                                                                        | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | XOR                                     |
| Meta      | 11 | Leetcode 415  | Add Strings                                                                                                              | strings/ array        | Easy   | JS       | TC: O(max(m,n))<br>SC: O(max(m,n))                                                                                         |                                         |
| Meta      | 12 | Leetcode 67   | [Add Binary](https://leetcode.com/problems/add-binary/)                                                                  | strings/ array        | Easy   | JS       | TC: O(max(m,n))<br>SC: O(max(m,n))                                                                                         |                                         |
| Meta      | 13 | Leetcode 345  | Reverse Vowels of a String                                                                                               | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 14 | Leetcode 83   | Move Zeroes                                                                                                              | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | two_pointers                            |
| Meta      | 15 | Leetcode 724  | Find Pivot Index                                                                                                         | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | math                                    |
| Meta      | 16 | Leetcode 278  | First Bad Version                                                                                                        | array                 | Easy   | JS       | TC: O(logn)<br>SC: O(1)                                                                                                    |                                         |
| Meta      | 17 | Leetcode 349  | Intersection of Two Arrays                                                                                               | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       | hashset                                 |
| Meta      | 18 | Leetcode 160  | DS - Intersection of Two Linked Lists<br>                                                                                | Linked List           | Easy   | JS       | TC: O(max(m,n))<br>SC: O(1)                                                                                                |                                         |
| Meta      | 19 | Leetcode 1239 | DS - Maximum Length of a Concatenated String with Unique Characters                                                      | string + backtracking | Medium | JS       | TC: O(2n)<br>SC: O(n)                                                                                                      |                                         |
|           | 20 | Hackerrank    | Bigger is the greater                                                                                                    | string                | Medium | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| Meta      | 21 | Leetcode 5    | Longest Palindromic Substring                                                                                            | string                | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 22 | Leetocode 442 | find all duplicates in an array                                                                                          | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 23 | Leetcode 896  | Monotonic Array                                                                                                          | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 24 | Leetcode 766  | Toeplitz Matrix                                                                                                          | array                 | Easy   | JS       | TC: O(n^2)<br>SC: O(1)                                                                                                     |                                         |
| Meta      | 25 | Leetcode 463  | Island Perimeter (matrix)                                                                                                | array                 | Easy   | JS       | TC: O(n^2)<br>SC: O(1)                                                                                                     |                                         |
| Meta      | 26 | Leetcode 844  | Backspace String Compare                                                                                                 | string                | Easy   | JS       | TC: O(n+m)<br>SC: O(1)                                                                                                     |                                         |
| Meta      | 27 | Leetcode 121  | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)                        | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 28 | Leetcode 977  | Squares of a Sorted Array                                                                                                | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       | two_pointers                            |
| Meta      | 29 | Leetcode 347  | Top K Frequent Elements                                                                                                  | array                 | Medium | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| Meta      | 30 | Leetcode 1275 | Find Winner on a Tic Tac Toe Game<br>                                                                                    | \-                    | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 31 | Leetcode 1047 | [DS - Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 32 | Leetcode 53   | Maximum Subarray                                                                                                         | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 33 | Leetcode 242  | Valid Anagram                                                                                                            | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | hashmap                                 |
| Meta      | 34 | Leetcode 405  | Convert a Number to Hexadecimal                                                                                          | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 35 | Leetcode 20   | DS - Valid Parentheses                                                                                                   | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 36 | Leetcode 674  | Longest Continuous Increasing Subsequence                                                                                | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 37 | Leetcode 168  | Excel Sheet Column Title                                                                                                 | strings               | Easy   | JS       | TC: O(log(n))<br>SC: O(1)                                                                                                  |                                         |
| Microsoft | 38 | Leetcode 38   |  Count and Say                                                                                                           | strings               | Medium |          | TC: O(n\*m)<br>SC: O(n)                                                                                                    |                                         |
| Microsoft | 39 | Leetcode 557  | Reverse Words in a String III<br>                                                                                        | strings               | Easy   | JS       | TC: O(n+m)<br>SC: O(n)                                                                                                     |                                         |
| Microsoft | 40 | Leetcode 205  | Isomorphic Strings                                                                                                       | strings               | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| Microsoft | 41 | Leetcode 832  | Flipping an Image                                                                                                        | array                 | Easy   | JS       | TC: O(n^2)<br>SC: O(1)                                                                                                     |                                         |
| Microsoft | 42 | Leetcode 13   | Roman to Integer                                                                                                         | strings/ array        | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       | hashmap, one_pointer(RToL)              |
| Microsoft | 43 | Leetcode 268  | Missing Number                                                                                                           | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | math                                    |
| Microsoft | 44 | Leetcode 387  | First Unique Character in a String                                                                                       | strings               | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 45 | Leetcode 28   | Find the Index of the First Occurrence in a String                                                                       | strings               | Easy   | JS       | TC: O(n\*m)<br>SC: O(1)                                                                                                    |                                         |
| Microsoft | 46 | Leetcode 509  | Fibonacci Number                                                                                                         | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Microsoft | 47 | Leetcode 1470 | Shuffle the Array                                                                                                        | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| Microsoft | 48 | Leetcode 70   | Climbing Stairs                                                                                                          | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 49 | Leetcode 884  | Uncommon Words from Two Sentences                                                                                        | strings               | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| \-        | 50 | Leetcode 9    | Palindrome Number                                                                                                        | strings/ array        | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| Meta      | 51 | Leetcode 1360 | Number of Days Between Two Dates                                                                                         | strings/ array        | Easy   | JS       | TC: O(1)<br>SC: O(1)                                                                                                       |                                         |
| Meta      | 52 | Leetcode 1287 | Element Appearing More Than 25% In Sorted Array                                                                          | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | sliding_window                          |
| Meta      | 53 | Leetcode 824  |  Goat Latin<br>                                                                                                          | strings               | Easy   | JS       | TC: O(N \* M)<br>SC: O(N + M)                                                                                              |                                         |
| Meta      | 54 | Leetcode 14   | Longest Common Prefix                                                                                                    | string                | Easy   | JS       | TC: O(n \* m)<br>SC: O(1)                                                                                                  |                                         |
| Meta      | 55 | Leetcode 414  | Third Maximum Number                                                                                                     | array                 | Easy   | JS       | TC: O(n\*log(n))<br>SC: O(1)                                                                                               |                                         |
| \-        | 56 | Leetcode 69   | Sqrt(x)                                                                                                                  | array                 | Easy   | JS       | TC: O(logn)<br>SC: O(1)                                                                                                    | binary_search                           |
| \-        | 57 | Leetcode 66   | Plus One                                                                                                                 | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 58 | Leetcode 190  | Reverse Bits                                                                                                             | array                 | Easy   | JS       | TC: O(1)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 59 | Leetcode 169  | Majority Element                                                                                                         | array                 | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 60 | Leetcode 58   | Length of Last Word<br>                                                                                                  | string                | Easy   | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 61 | Leetcode 392  | Is Subsequence                                                                                                           | string                | Easy   | JS       | TC: O(max(s.length, t.length))<br>SC: O(1)                                                                                 |                                         |
| \-        | 62 | Leetcode 290  | Word Pattern                                                                                                             | string                | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| \-        | 63 | Leetcode      | Unique Morse Code Words                                                                                                  | string                | Easy   | JS       | TC: O(n^2)<br>SC: O(n)                                                                                                     |                                         |
| \-        | 64 | Leetcode 202  | Happy Number                                                                                                             | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| \-        | 65 | Leetcode 219  | Contains Duplicate II<br>                                                                                                | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| \-        | 66 | Leetocde 228  | Summary Ranges                                                                                                           | array                 | Easy   | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| \-        | 67 | Leetcode 80   | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)          | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 68 | Leetcode 151  | [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)                                    | string                | Medium | JS       | TC: O(n)<br>SC: O(max(n,m)                                                                                                 |                                         |
| \-        | 69 | Leetcode 189  |  Rotate Array                                                                                                            | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 70 | Leetcode 55   | Jump Game                                                                                                                | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | greedy                                  |
| \-        | 71 | Leetcdode 128 | Longest Consecutive Sequence                                                                                             | array                 | Medium | JS       | TC: O(n)<br>SC: O(n)                                                                                                       |                                         |
| \-        | 72 | Leetcode 122  | Best Time to Buy and Sell Stock II                                                                                       | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |
| \-        | 73 | Leetcode 274  | H-Index                                                                                                                  | array                 | Medium | JS       | TC: O(nlogn)<br>SC: O(1)                                                                                                   |                                         |
| \-        | 74 | Leetcode 134  | Gas Station                                                                                                              | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       | greedy                                  |
| Pinterest | 75 | Leetcode 811  | Subdomain Visit Count                                                                                                    | array/ string         | Medium | JS       | TC: O(n\*m)<br>SC: O(u) (if there are u unique subdomains)                                                                 |                                         |
| \-        | 76 | Leetcode 12   | Integer to Roman                                                                                                         | array/ string         | Medium | JS       | TC: O(13 \* max_num)<br>SC: O(1)                                                                                           |                                         |
| Pinterest | 77 | Leetcode 718  | Maximum Length of Repeated Subarray                                                                                      | array                 | Medium | JS       | TC: O(m \* n)<br>SC: O(m \* n)                                                                                             | dp                                      |
| Google    | 78 | Leetcode 300  | Longest Increasing Subsequence                                                                                           | array                 | Medium | JS       | TC: O(n^2)<br>SC: O(n)                                                                                                     | dp                                      |
| Pinterest | 79 | Leetcode 1062 | Longest Repeating Substring                                                                                              | array                 | Medium | JS       | TC: O(log n \* n)<br>SC: O(n)<br>                                                                                          | binary_search, hashset                  |
| \-        | 80 | Leetcode 16   |  3Sum Closest                                                                                                            | array                 | Medium | JS       | TC: O(n^2)<br>SC: O(1)<br>                                                                                                 | two_pointers                            |
| \-        | 81 | Leetcode 31   | Next permutation                                                                                                         | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)<br>                                                                                                   | two_pointers                            |
| \-        | 82 | Leetcode 792  | Number of Matching Subsequences                                                                                          | array                 | Medium | JS       | TC: O(m \* n \* log k)<br>SC: O(s)                                                                                         | two_pointers, hashmap,<br>binary_search |
| \-        | 83 | Leetcode 56   | Merge Intervals                                                                                                          | array                 | Medium | JS       | TC: O(nlogn)<br>SC: O(n)<br>                                                                                               | intervals, sorting                      |
| \-        | 84 | Leetcode 57   | Insert Intervals                                                                                                         | array                 | Medium | JS       | TC: O(n)<br>SC: O(1) (the extra space does not depend on the size of the input)<br>                                        | intervals                               |
| \-        | 85 | Leetcode 162  | Find Peak Element                                                                                                        | array                 | Medium | JS       | TC: O(logn)<br>SC: O(1)                                                                                                    | binary_search                           |
| \-        | 86 | Leetcode 238  | Product of Array Except Self                                                                                             | array                 | Medium | JS       | TC: O(n)<br>SC: O(1)                                                                                                       |                                         |