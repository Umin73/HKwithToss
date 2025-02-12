import { useState } from "react";

// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.
function Greeting(props) {
  return (
    <div>
      {props.isMorning ? (
        <p>좋은 아침입니다, {props.name}님!</p>
      ) : (
        <p>좋은 저녁입니다, {props.name}님!</p>
      )}
    </div>
  );
}
export function Props1() {
  return (
    <>
      <Greeting isMorning={true} name="김땡땡"></Greeting>
      <Greeting isMorning={false} name="이땡땡"></Greeting>
    </>
  );
}

//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.
function UserCard(props) {
  const [age, setAge] = useState(props.age);
  return (
    <div>
      <button onClick={() => setAge(age + 1)}>한 살 더 먹기</button>
      <p>
        이름: {props.name}, 나이: {age}
      </p>
    </div>
  );
}
export function Props2() {
  return (
    <>
      <UserCard name="ABC" age={25}></UserCard>
      <UserCard name="EFG" age={26}></UserCard>
    </>
  );
}

// 문제 3: 객체 리스트 렌더링
// 목표: 객체로 구성된 리스트를 렌더링하고, 추가 정보를 중첩된 형태로 출력합니다.
// 요구사항:
// ItemDetailList라는 컴포넌트를 작성하세요.
// props로 전달받는 각 객체는 이름과 세부 정보를 포함합니다.
// 예시 객체 리스트:
// [
//   { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
//   { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
//   { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] }
// ]
// 각 항목은 <ul> 내부에 렌더링하며, 이름과 세부 정보도 중첩 리스트로 표시합니다.
// 예시 출력:
// - 사과
//   * 빨간색
//   * 달콤함
//   * 비타민 C
function ItemDetailList({ name, details }) {
  return (
    <>
      <li>
        {name}
        <ul>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>
    </>
  );
}
export function Props3() {
  const list = [
    { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
    { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
    { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] },
  ];
  return (
    <div>
      {list.map((item, index) => (
        <ItemDetailList name={item.name} details={item.details} key={index} />
      ))}
    </div>
  );
}

//문제 4: children을 활용한 강조 텍스트 컴포넌트
// 목표: 특정 부분의 텍스트를 강조할 수 있는 컴포넌트를 작성하세요.
// 요구사항:
// HighlightBox라는 컴포넌트를 작성하세요.
// 부모 컴포넌트에서 children을 사용하여 강조할 텍스트를 전달합니다.
// 예시)
// <p>
// 아래 텍스트에서 중요한 부분은 <HighlightBox>노란색으로 표시</HighlightBox>됩니다.
// </p>
// 강조할 부분은 노란색 배경과 굵은 텍스트로 표시하세요.
// 스타일 객체 { backgroundColor: "yellow", fontWeight: "bold", padding: "10px" }
