// let num = 1;
// while(num <= 5){
//   console.log(num);
//   num++;
// }

// for(let i = 1; i <= 1000; i*=2){
//   console.log(i);
// }

// const students = ['Ananda', 'Ryan', 'Jackie'];

// for(let student of students){
//   console.log('Hello ' + student);
// }

// // forEach

// students.forEach(function(value,index){
//   console.log(x + ' ' + y);
// })

// Object iteration

// const teachers = {
//   fastTrack: 'Daniel',
//   flexTrack2: 'Alex',
//   flexTrack1: 'Irina'
// }

// for(let key in teachers){
//   console.log(teachers[key]);
// }

// // Map

// const newStudents = students.map((value) => {
//   return 'Hello ' + value;
// })

// console.log(newStudents);

// // Break Continue

// for(let j = 1; j <= 10; j++){
//   if(j % 2 === 0){
//     break;
//   }
//   console.log(j);
// }

// for(let j = 1; j <= 10; j++){
//   if(j % 2 === 0){
//     continue;
//     console.log(j);
//   }
//   console.log(j);
// }

// console.log(1 == '1');
// console.log(1 === '1');
// console.log('a' == 'A');

// function listNumbers(num1, num2, ...otherNum){
//   console.log('Number1:' + num1);
//   console.log('Number2:' + num2);
//   for(let num of otherNum){
//     console.log(num);
//   }
// }
// const numArray = [4,6,7,2,6];
// listNumbers(3,7,8,9,10);
// listNumbers(...numArray);

// const students = ['Ananda', 'Ryan', 'Jackie','Karen', 'Joanna'];

// let ananda1 = students[0];
// let ryan1 = students[1];
// let jackie1 = students[2];

// console.log(ananda1);

// let [ananda2, ryan2, jackie2] = students;
// console.log(ananda2);
// ananda2 = 'James';
// console.log(students[0]);
// console.log(ryan2);
// console.log(jackie2);

// let [ananda3, ryan3, ...otherStudents] = students;

// console.log(otherStudents);

// const dc = ['Batman', 'Superman'];
// const marvel = ['Iron man','Thanos'];

// const combine = [...dc, ...marvel];

// console.log(combine);

// const blackWidow = {
//   name: 'Natalia Romanov',
//   superHeroName: 'Black Widow',
//   species: 'Human',
//   colours:{
//     suit: 'black',
//     hair: 'red'
//   }
// }

// let { name, species, affiliation = 'Hero', colours: {suit} }  = blackWidow;

// console.log(name, species, affiliation, suit);

// let a = helloFunc();
// console.log(a);

// var helloFunc = () => {
//   return 'Hello';
// }

// function sayHello(){
//   return 'Hello';
// }
// console.log(a,b);
// var a = 2;
// const b = 3;
// function CustomError(message){
//   this.name = "CustomError";
//   this.message = message;
// }

// try{
//   console.log('start of error handling')
//   // throw new CustomError('this is a custom error');
//   console.log('End of error handling')
// }catch(error){
//   console.log(error.message);
// }finally{
//   console.log('finally')
// }

function divideNumbers(num1, num2){
  let answer;
  try{
    answer = num1 / num2;
    if(isNaN(answer) || answer === Infinity){
      throw new Error('this is a error')
    }
    return answer
  }catch(error){
    console.log(error.message);
    return false;
  }finally{
    return 'ok';
  }
}

// console.log(divideNumbers(1,0));

// function numberChecker(num) {
  // let number = 1;
  // switch (number) {
  //   case 1:
  //     console.log(2);
  //     break;
  //   case 2:
  //     return true;
  //     break;
  //   default:
  //     return false;
  // }
// }

// let testVar = 'hello';

function greatFunc(num){
  return function(a){
    return a * num;
  }
}

const multiplyBy10 = greatFunc(10);
console.log(multiplyBy10(4));
// console.log(testVar);


