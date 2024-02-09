/* 
1) вивчит методи списків  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
new Array, [] 
of  => (1, 2, 3) > [1, 2, 3], ('1', '2', '3') > [1, 2, 3] 
from  => ('foo', (x) => x.toUpperCase()) > ['F', 'O', 'O'] 
at => arr.at(index) > index value. Example: [1, 2, 3].at(2) => 3 
concat => arr1.concat(arr2, arr3, arr4, [...]) => arr1 + 2 + 3 + 4 
every => arr.every(test) > is check passed (every el-s), (bool). Example: [9674, 528].every((x) => x % 2 === 0) > true 
fill => arr.fill(value, start, end) Eample: [1, 2, 3, 4, 5, 6, 7, 8, 9].fill(3, 4, 7) > [1, 2, 3, 4, 3, 3, 3, 3, 8, 9] 
filter => arr.filter(test)) Example: [34, 896, 401, 77, 29, 111, 995, 4].filter(num => num > 100) 
some => arr.every(test) > is check passed (1+ el-s) (bool). Example: [9674, 528].every((x) => x % 2 === 0) > true 
find => arr.every(test) > VALUE of 1-st element, passsed the test. Example: [9674, 528].every((x) => x % 2 === 0) > true 
findIndex => arr.every(test) >  INDEX of 1-st element, passsed the test. Example: [9674, 528].every((x) => x % 2 === 0) > true 
flat => [1, 2, [3, 4]].flat() => [1, 2, 3, 4]; [1, 2, , 4, 5].flat() => [1, 2, 4, 5]
forEach => [1, 2, 3].forEach(elem => console.log(elem)) return undefined
map =>  [1, 2, 3].map(elem => elem**3) => [1, 8, 27]
reduce => ([1, 2, 3].reduce((acc, num) => acc + num)) => 6
reduceRight => reversed reduse (iterate array from rihgt to left)
includes => ['a', 'b', 'c'].includes('b') => true; ['a', 'b', 'c'].includes('d') => false
indexOf =>  ['a', 'b', 'c'].indexOf('a') => 0
isArray =>  Array.isArray([1, 2, 3]) => true; Array.isArray('1, 2, 3') => false 
join =>  ['a', 'b', 'c'].join(',') => 'abc'
lastIndexOf => ['a', 'b', 'c', 'a'].lastIndexOf(a) => 3
keys => {'a': 1, 'b': 2, 'c': 3}.keys() => ['a', 'b', 'c']
reverse => [1, 2, 3].reverse => [3, 2, 1]
pop => removes the FIRST item of the array. [1, 2, 3] => [1, 2]. returnes 3.
push => [1, 2, 3].push(4) => [1, 2, 3, 4]
shift => removes the FIRDT item of the array. [1, 2, 3] => [2, 3]. returnes 1.
unshift => adds arguments in the bigining. [1, 2, 3].unshift(4, 5) => [4, 5, 1, 2, 3]
slice => [1, 2, 3, 4, 5].slice(1, 3) => 2, 3
splice => [1, 2, 3].splice(2, 3) => 2
sort =>  [3, 1, 2] => [1, 2, 3]
toString => []
values =>  
entries =>  
keys =>  
*/

/*
2) Методи рядків:
slice() => 'abcd'.slice(1, 3) => 'bcd'
substring()
replace()
replaceAll()
toUpperCase() => 'abc' > 'ABC'
toLowerCase() => 'ABC' > 'abc'
concat() => 'ab'.concat('cd', ' ') => 'ab cd'
trim() => '  abc    '.trim() => 'abc'
padStart() => 'abcd'.padStart(2, '-') > '--cd'
padEnd() => 
charAt() => 'abc'.charAt(1) > 'b'
charCodeAt() => 'abc'.charCodeAt
split() 'hello world'.split(' ') => ['hello']


const fullNumber = '5167888733080457'; 
const last4 = fullNumber.slice(-4);
const maskDisNumber = last4.padStart(fullNumber.length,'*')
console.log(maskDisNumber);

*/
