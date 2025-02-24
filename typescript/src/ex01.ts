// 기본 타입(Primitive Type): 하나의 값만 가지는 타입

// 명시적 타입 선언 vs 암묵적 타입 선언
let myNum1: number = 123 // 명시적
let myNum2 = 123 // 암묵적

// number
let num1: number = 123
console.log('hello')

// string
let str1: string = 'hello'
// boolean
let bool1: boolean = true
// null
let null1: null = null
// undefined
let unde1: undefined = undefined
// 리터럴 타입
let lit1: 10 = 10 // <- 10 이외의 다른 값 넣을 수 없음

// "strictNullChecks" : true
// null값을 변수에 할당하지 못하도록 함
// let numA: number = null
