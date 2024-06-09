Project Name: Interactive photo gallery

Description

Implement an interactive photo gallery based on the provided Figma designs. The gallery should be responsive and work seamlessly on both desktop and mobile devices. Features such as image thumbnail navigation, full-size image viewing, and any interactions specified in the designs should be implemented.

Coding Challenge 1: Array Manipulation

Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.
Example
Input: arr = [2,3,5,9,10,11], target = 8
Output: true
Explanation: The subarray [3,5] sums up to 8, which is equal to the target.
Constraints
•	The array will contain between 1 and 100,000 elements.
•	The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.
•	Expected Time Complexity: O(n), where n is the length of the array.
•	Expected Space Complexity: O(1).

Coding Challenge 2: String Transformation

Problem Statement
Given a string, transform it based on the following rules:
•	If the length of the string is divisible by 3, reverse the entire string.
•	If the length of the string is divisible by 5, replace each character with its ASCII code.
•	If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.
Example
•	Input: "Hamburger"
•	Output: "regrubmaH"
•	Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".
