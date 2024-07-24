//......................arrays................................................
let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array
let aarray:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//let array4: number[] = number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamically adding

//////,..............array methods...................................

// ..........................indexof................................
//find the index of element

console.log(array1.indexOf(5));
//.........................lastindexof..............

console.log(array1.lastIndexOf(6));
//........................concat..............
//merge two arrays together in a single array

let array6: number[] = [1, 2, 3];
let array7: number[] = [4, 5, 6];
let array8: number[] = array6.concat(array7);
console.log(array8);
//..........................join..................
// join two elements of strings in a single string

let array9: string[] = ['Hello', 'World'];
let joinedString: string = array9.join(' ');
console.log(joinedString);
//.......................push..................
//add elemnet in the last..

console.log(array8.push(7));
//.......................pop..........................
//remove last element fron the end.

console.log(array8.pop());
//..........................shift..................
//remove element in the start 

console.log(array8.shift());
//......................unshift................
//add element in the start

console.log(0);
//......................reverse..............
//reverse the whole array...

console.log(array8.reverse());
//.......................slice..................
//take out required piece of array like a cake slice...//starting index,end index

let slicedArray: number[] = array8.slice(1,4)
console.log(slicedArray);
//......................sort.....................
//.arrange the elements in ascending order and alphabetical order.

let array10: number[] = [5, 2, 9, 1, 7];
array10.sort();
console.log(array10);
//.....................splice.....................
//add a piece of cake in a cake.. it add or remove elements in the same array,,, starting index,no of elements,or what you want to add...

let array11: number[] = [1, 2, 3, 4, 5];    
array11.splice(2, 1, 6, 7);
console.log(array11);
//....../..............toString.....................
//convert array into string with separator

let array12: number[] = [1, 2, 3];
console.log(array12.toString());


//.......................length.....................
//...defines the actual lenght of array or number of elements found in array

let array14: number[] = [1, 2, 3];
console.log(array14.length);

//....................filter.......
//it filterout the required condition or function

let array15: number[] = [1, 2, 3, 4, 5];
let filteredArray: number[] = array15.filter(num => num > 2);
console.log(filteredArray);
//............................map..............
// it iterate each element with the desired function

let array16: number[] = [1, 2, 3];
let mappedArray: number[] = array16.map(num => num * 2);
console.log(mappedArray);
//.........................forEach..............
//it also iterate single elements of array

let array17: number[] = [1, 2, 3];
array17.forEach(num => console.log(num));
//.........................reduce..............

//it is a callback function in which it gives a single value of an array by adding or multiplying
//current value + next number,starting value


let array18: number[] = [1, 2, 3,4,5,6];
let sum: number = array18.reduce((acc, num) => acc + num, 0);
console.log(sum);//21


