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
keys =>  
reverse =>  
pop =>  
push =>  
shift =>  
unshift =>  
slice =>  
splice =>  
sort =>  
toString =>  
values =>  
entries =>  
keys =>  
*/