/*
var twoSum = function(nums, target) {
    result = [];
    done = false;

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target && i != j) {
          result.push(i);
          result.push(j);

          done = true;

          break
        }
      }

      if (done) {
        break
      }
    }

    return result
};


console.log(twoSum([3,2,4], 6));
/*

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?*/


/*
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0: n*m
};

console.log(paperwork(5,0));
*/

/*
function stringToArray(string){
  return string.split(' ')
}

console.log(stringToArray("I love arrays they are my favorite"));
*/


/*
function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8: number * 9
}

console.log(simpleMultiplication(1));
*/ 

