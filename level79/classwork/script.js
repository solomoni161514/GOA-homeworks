for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }


  //1
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log('საბოლოო რიცხვების ჯამი არის ' + sum);

//2
for (let i = 1; i <= 10; i++) {
  console.log(i + ' - ის კვადრატი არის ' + (i * i));
}

//3
let str = "გამარჯობა";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//4
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}