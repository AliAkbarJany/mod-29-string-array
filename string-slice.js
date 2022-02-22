
// split==============
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
// const words = anthem.split('');
const words = anthem.split(' ');
const wordsWithoutA = anthem.split('a');
// console.log(wordsWithoutA);
// console.log(words);

// slice==========
const smallSlice = anthem.slice(5, 13);
// console.log('slice words::', smallSlice);


// substr==========
// const anotherPart = anthem.substr(5, 11)
// const anotherPart = anthem.substr(5, 13)
const anotherPart = anthem.substr(5, 12)
// console.log('substr words::', anotherPart);

// substring===========
const subString = anthem.substring(5, 13);
// console.log('substring words::', subString);

// concat=======

const first = "priyo";
const second = "sohor";
/* const fullString = first + second;
console.log(fullString); */
const fullString = first.concat(second);
// const fullString = first.concat(second).concat('abcd');
// console.log(fullString);


// join=========
const words2 = ['a', 'b', 'c', 'd'];
const allJoin = words2.join(',');
// const allJoin = words2.join(', ');
// const allJoin = words2.join(' ,');
// console.log('joining words::', allJoin);


// const task = "practice makes";
// const index = task.toLowerCase().indexOf("M");
// console.log(index);
const array = ['121', '12', '1', '112', '111'];
console.log(array.sort());