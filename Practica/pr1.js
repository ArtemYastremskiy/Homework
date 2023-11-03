// ************************************************** 
// Task
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
// Note: There is no newline in the end (after the pattern ends)
// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:
// 1
// 1*2
// 1**3
// pattern(10): should return the following:
// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10


/*
function pattern(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
      // Add the starting "1"
      output += "1";
      
      // Add the appropriate number of asterisks
      for (let j = 1; j < i; j++) {
        output += "*";
      }
      
      // Add the line number if it is not the first line
      if (i > 1) {
        output += i;
      }
      
      // Add a newline if it is not the last line
      if (i < n) {
        output += "\n";
      }
    }
    return output;
  }


console.log(pattern(10));
*/
/*
// Task 2
const Password1 = 'GobGh2uBYr3v&bd8!n84bGFT@!'
const Password2 = 'Gobgh2ubyR3v&bd8!n84BGfT@!'

console.log(Password1.toLowerCase() == Password2.toLowerCase());
*/