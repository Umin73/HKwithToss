// 리액트 엘리먼트(React Element)란?
// 리액트 엘리먼트는 리액트 앱의 UI를 구성하는 가장 작은 단위입니다. 엘리먼트는 화면에 표시될 내용을 설명하는 자바스크립트 객체로, 컴포넌트를 생성하고 렌더링하는 데 사용됩니다.

// 리액트 엘리먼트는 **불변(immutable)**이며 한 번 생성되면 그 내용을 변경할 수 없습니다. 대신 새로운 엘리먼트를 생성하여 화면의 변화를 반영합니다.

// 리액트 엘리먼트의 특징
// 1. 불변성: 엘리먼트는 한 번 생성되면 변경할 수 없습니다.
// 2. 가볍고 빠름: 가상 DOM을 사용하여 변경 사항을 효율적으로 관리합니다.
// 3. UI의 구성 단위: 컴포넌트 내에서 리액트 엘리먼트는 HTML 태그처럼 사용됩니다.

import React from "react";
// React 17 이상에서는 import 하지 않아도 JSX를 사용 가능

const E1 = <h1 className="greeting">리액트 엘리먼트1입니다.</h1>;
export const E2 = React.createElement(
  "h1", // type
  //null, // props
  { className: "greeting" },
  "리액트 엘리먼트2입니다." // [...children]
);

// JSX에서 JS 시작하려면, {} 중괄호 사용
// JS에서 스타일은 k-v 객체로 사용
export const E3 = <h1 style={{ color: "blue" }}>엘리먼트3</h1>;

const fruits = ["사과", "바나나", "포도"];
export const E4 = (
  <ul>
    {fruits.map((item, index, array) => {
      // {JS 값 표현식}
      // 리액트의 리스트(목록)은 key을 줘야 됨
      return <li key={index}>{item}</li>;
    })}
  </ul>
);

export const E5 = (
  <ul>
    {fruits.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// 소괄호 없이 return 하는 경우
//  : return 뒤에 바로 jsx나 값이 올 경우

// 소괄호로 return 하는 경우
//  : 함수 컴포넌트로 return 하는 경우는
//    최상위 단일 요소로 만들어야 됨
//    (단순히, 비어있는 <> </>로 감싸줘도 됨)

function handleClick() {
  alert("버튼이 클릭되었습니다.");
}

export const E6 = (
  <>
    <h1>이벤트 처리</h1>
    <button onClick={handleClick}>클릭하세요</button>
  </>
);

// props로 데이터 전달하기
export function Hello(props) {
  // return 문과 같은 줄에 있을 땐 소괄호 필요 없음
  return <h1>Hello, {props.name}님!</h1>;
}

export function Button(props) {
  return (
    // 백틱``을 사용해야하는 이유: 문자열 타입으로 전달하기 위해
    <button style={{ color: props.color }}>
      {/* JSX 코멘트: children은 props의 기본 속성 */}
      {/* 으로 컴포넌트 하위 요소를 의미함 */}
      <b>{props.children}</b>
    </button>
  );
}

export function ConfirmDialog(props) {
  return (
    <div>
      <p>확인버튼을 눌러주세요.</p>
      <Button color="green">
        <span>확인</span>
      </Button>
    </div>
  );
}

// 내보내기 할 하나의 컴포넌트(요소)
export default E1;
// export { E1, E2}; // 하나씩 내보내기
