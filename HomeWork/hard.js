// Cтворити обьект який буде навпаки чим obj тобото{  "Vasy": name , 24: age }
// const obj = {
//     name: "Vasy",
//     age: 24,
//     num: 1
// };

// const key = Object.keys(obj)
// const value = Object.values(obj)


// let resault = new Object()

// for (let i = 0; i < key.length; i++) {
//     resault[value[i]] = key[i];
// }
// console.log(resault);

// ****************************************************
// In a computer operating system that uses paging for virtual memory management, page replacement algorithms decide which memory pages to page out when a page of memory needs to be allocated. Page replacement happens when a requested page is not in memory (page fault) and a free page cannot be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.

// The FIFO page replacement algorithm
// The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm that requires little bookkeeping on the part of the operating system. The idea is obvious from the name: the operating system keeps track of all the pages in memory in a queue, with the most recent arrival at the back, and the oldest arrival in front. When a page needs to be replaced, the oldest page is selected. Note that a page already in the queue is not pushed at the end of the queue if it is referenced again.

// Your task is to implement this algorithm. The function will take two parameters as input: the number of maximum pages that can be kept in memory at the same time n and a reference list containing numbers. Every number represents a page request for a specific page (you can see this number as the unique ID of a page). The expected output is the status of the memory after the application of the algorithm. Note that when a page is inserted in the memory, it stays at the same position until it is removed from the memory by a page fault.

// Example:
// Given:

// N = 3,
// REFERENCE LIST = [1, 2, 3, 4, 2, 5],
//   * 1 is read, page fault --> memory = [1];
//   * 2 is read, page fault --> memory = [1, 2];
//   * 3 is read, page fault --> memory = [1, 2, 3];
//   * 4 is read, page fault --> memory = [4, 2, 3];
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> memory = [4, 5, 3].
// So, at the end we have the list [4, 5, 3], which is what you have to return. If not all the slots in the memory get occupied after applying the algorithm, fill the remaining slots (at the end of the list) with -1 to represent emptiness (note that the IDs will always be >= 1).

// ****************************************************

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.
/*
function getMiddle(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.slice(0, i).length == str.slice(i + 2, str.length + 1).length) {
            return str.at(i)
        }
    }
};

console.log(getMiddle("abcAdef"));
*/

//console.log(str.slice(0, i).length, str.slice(i, str.length + 1).length, str.at(i))
//console.log(str.slice(0, i), str.slice(i, str.length + 1), str.at(i), '\n')



const arr = ['arr', {a: 3}, [6,7,9], 4, true, String('Hello'), undefined, null, NaN, Number('34'), Number(12), +'66'];

const result = {'arrays': [], 'other': []};


arr.forEach((i) => {
    let type = typeof i

    if (Array.isArray(i)) {
        result['arrays'].push(i)
    } else if([undefined, NaN, Infinity, null].includes(i)) {
        result['other'].push(i)
    
    } else if (result[type]) {
        result[type].push(i)
    } else {
        result[type] = []
        result[type].push(i)
    }
});


console.log(result);
