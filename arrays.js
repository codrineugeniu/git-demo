let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = [];

// 1.
myArr.forEach((element) => result.push(element + 1));

// 2.
for (let element of myArr) {
  result.push(element + 1);
}

// console.log(result);

// 3.
console.log(myArr.map((element) => element + 1));

let greaterThanFive = [];

for (let element of myArr) {
  if (element >= 5) {
    greaterThanFive.push(element);
  }
}

console.log(myArr.map((element) => element + 1));

console.log(
  "greater than five: ",
  myArr.filter((element) => element >= 5)
);
