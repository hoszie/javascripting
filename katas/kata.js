const numberOfVowels = function (data) {
  let sum = 0;
  for (var i = 0; i < data.length; i++) {
    if(data.charAt(i) == 'a' || data.charAt(i) == 'e' || data.charAt(i) == 'i' || data.charAt(i) == 'o' || data.charAt(i) == 'u') {
      sum ++
    }
  }
  return sum;
}

const numberOfVowels = function (data) {
  let sum = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < vowels.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data.charAt(i) == vowels[i]) {
        sum ++
      }
    }
  }
  return sum;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


const numberOfVowels = function (data) {
  let sum = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < vowels.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data.charAt(j) == vowels[i]) {
        sum ++;
      }
    }
  }
  return sum;
}
//first for grabs an 'a' and the second for compares every
//character of data to it. And, then on to e and i, and adds them
//them all together with sum++. Why use this? To do this?


// keep studying. Going back and forth. 
//how does this relate? Find specific characters
//of a string? why do that? Look at that shit. 

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


const instructorWithLongestName = function (instructors) {
  let longest = instructors.sort(function (a, b) {
    return b.name.length - a.name.length;
  });
  return longest[0];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));



// console.log(urlEncode("Lighthouse Labs"));
//OUTPUT: Lighthouse%20Labs

//Take a string and insert '%20' when there is a space.

//



const urlEncode = function(text) {
  let encodeText;
  for (let i = 0; i < text; i++) {
    if(text[i] === " ") {
      
    }
  }
}

 console.log(urlEncode("Lighthouse Labs"));