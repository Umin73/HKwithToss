import React, { useState } from "react";
//Ex.jsx

// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트
export function StateFunc1() {
  const [text, setText] = useState("");
  const saveInputText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" id="inputText" onChange={saveInputText} />
      <p>사용자가 입력한 텍스트: {text}</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.
export function StateFunc2() {
  const [clicked, setClicked] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const colorArr = ["red", "green", "blue"];

  const changeButtonColor = (event) => {
    setClicked(!clicked);
    if (colorIdx < 2) setColorIdx(colorIdx + 1);
    else if (colorIdx == 2) setColorIdx(0);
  };

  return (
    <div>
      <button
        onClick={changeButtonColor}
        style={{ backgroundColor: colorArr[colorIdx] }}
      >
        버튼을 클릭하세요
      </button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용
export function StateFunc3() {
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState("OFF");

  const clickCheckbox = (event) => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setText("ON");
    } else {
      setText("OFF");
    }
  };

  return (
    <div>
      <input type="checkbox" onChange={clickCheckbox} />
      <p>{text}</p>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.
export function StateFunc4() {
  const [number, setNumber] = useState(0);
  const changeNumber = (event) => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  return (
    <div>
      <button onClick={changeNumber}>현재 숫자 값: {number}</button>
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]
export function StateFunc5() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const enterInputText = (event) => {
    setInput(event.target.value);
  };

  const addList = () => {
    console.log(list);
    setList((list) => [...list, input]);
  };

  return (
    <div>
      <input type="text" id="input" onChange={enterInputText} />
      <button onClick={addList}>리스트에 추가</button>
      <p>현재 리스트: {list}</p>
    </div>
  );
}
