// document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
//     if(!button.classList.contains('delete')) {
//         button.classList.add('delete');
//         setTimeout(() => button.classList.remove('delete'), 3200);
//     }
//     e.preventDefault();
// }));
// ==================================================
// palindrome

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
console.log( isPalindrome("nayana"))

// fibonachhhi sequence
 function isFibonacci(str){
   if(str <= 0) return []
   if(str >= 1) return [0]

 isFibonacci(9)
//  Fibonacci Sequence,
// Factorial Calculation, 
// Prime Number Check,
//  Anagram Check , 
// Reverse a String,
// Finding the Largest/Smallest Number in an Array,
//  Counting Vowels in a String,
//  Array/Linked List Reversal,
//  FizzBuzz,
//   Finding Unique Characters, 
//  Two Sum Porblem,
//   Binary Search,
//    Merge Sorted Arrays,
//    Remove Duplicates from Array,
//  Flatten a Nested Array, 
// String Permutations, 
//  Longest Common Prefix


 }
  // length
      // var numbers = [1,2,3,4,5,6,1,2,3,4,5,6,7,8,90,8,7,6,6,]
      //  console.log(numbers.length, "num") 

  //push
      // var numbers = [1,2,3,4,5,6]
      //      let added = numbers.push(798)
      //      console.log(added, "add")
      //      console.log(numbers,"num")

 // pop
          //       var numbers = [1,2,3,4,5,6]
          //  let added = numbers.pop()
          //  console.log(added, "add")
          //  console.log(numbers,"num")

//unshift
          //       var numbers = [1,2,3,4,5,6]
          //  let added = numbers.unshift(87)
          //  console.log(added, "add")
          //  console.log(numbers,"num")
          //  
          //  var numbers = [1,2,3,4,5,6]
          //  let added = numbers.shift(87)
          //  console.log(added, "add")
          //  console.log(numbers,"num")


// map 
  //  var num = [1,2,3,4,5,6,7]
  //  num.map((ele,index)=>{
  //     if(ele == "0")
  //   console.log(ele,index)
  //   // console.log(num)
  //  })

  // //  filter
  // var num = [1,2,3,4,5,6,7,34,45]

  //   const elem =num.filter((ele)=>{
  //    if(ele % 3 == 0 || ele % 5 == 0){
  //     console.log(ele, "divisible")
  //    }else {
    //     console.log(ele, "not ")
    //    }
    //  })
    //  console.log(num, "num")
    //  console.log(elem, "ele")
    
    
  // 1. Program to find longest word in a given sentence ?
        let sentance = "Program to find longest word in a given sentence"
         let a = sentance.split(" ")
         let longestWord = "";
         for (let word of a) {
             if (a.length > longestWord.length) {
                 longestWord = word;
             }
         }
         console.log(longestWord)

 //  2. How to check whether a string is palindrome or not ?
          function isPalindrome(str){
            const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            return cleanedStr === cleanedStr.split('').reverse().join('');
          }
          console.log(isPalindrome("naina"))
//  3. Write a program to remove duplicates from an array ?
function removeDuplicates(arr) {
  const uniqueElements = {};
  const result = [];

  for (let item of arr) {
      if (!uniqueElements[item]) {
          uniqueElements[item] = true;
          result.push(item);
      }
  }

  return result
}


const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array)); 




//  4. Program to find Reverse of a string without using built-in method ?
//  5. Find the max count of consecutive 1’s in an array ?
//  6. Find the factorial of given number ?
//  7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
//  8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
//  9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
//  10. Write logic to get unique objects from below array ?
//  I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
//  O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
//  11. Write a JavaScript program to find the maximum number in an array.
//  12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//  13. Write a JavaScript function to check if a given number is prime.
//  14. Write a JavaScript program to find the largest element in a nested array.
//  [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
//  15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
//  16. Given a string, write a javascript function to count the occurrences of each character in the string.
//  17. Write a javascript function that sorts an array of numbers in ascending order.
//  18. Write a javascript function that sorts an array of numbers in descending order.
//  19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
//  20. Implement a javascript function that flattens a nested array into a single-dimensional array.

        


