// 객체의 타입
let user1: object = { id: 1, name: '홍길동' }

// 'object' 형식에 'id' 속성이 없습니다.
// user1.id

let user2: {
  id: number
  name: string
} = {
  id: 1,
  name: '홍길동',
}
console.log(user2.name)

let user3: {
  // 선택적 프로퍼티를 통해 속성 생략 가능
  id?: number
  name: string
} = {
  name: '홍길동',
}

let config: {
  // 읽기 전용 속성으로 지정
  readonly apiKey: string
} = {
  apiKey: 'MY API KEY',
}
// config.apiKey = '123456'
