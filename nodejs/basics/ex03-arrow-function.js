// 일반 함수와 화살표 함수(ES6 - ES2015)

// 함수형  변수(함수 표현식)

// 익명 함수
let hi = function () {
  return '안녕하세요.'
}

console.log(hi())

// 일반 함수의 매개벼수로 함수형 변수를 전달 => 고차함수
function sayHi(method) {
  console.log(method())
}

sayHi(hi)

// 화살표 함수로 변경
let hi2 = () => {
  return '안녕하세요!'
}
sayHi(hi2)

let sum = (a, b) => {
  return a + b
}

console.log(sum(10, 20))

// 화살표 함수의 수행문이 한 줄 이면, 중괄호랑 return 생략 가능
let sub = (a, b) => a - b
console.log(sub(10, 20))

// 매개변수가 하나이면, 소괄호 생략 가능
// prettier-ignore
let double = a => a * 2
console.log(double(10))
