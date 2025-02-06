//Lifecycle.jsx
// 리액트 라이프사이클의 개념
// 리액트의 라이프사이클은 컴포넌트가 생성되고, 업데이트되며,
// 제거될 때 일어나는 일련의 과정을 의미합니다.
// 클래스형 컴포넌트에서 더 명확하게 사용되었지만,
// 함수형 컴포넌트에서는 useEffect Hook을 통해 비슷한 동작을 구현할 수 있습니다.

// 리액트 컴포넌트 라이프사이클의 3단계
// 1. 마운트 (Mount): 컴포넌트가 처음 DOM에 추가될 때 발생하는 단계
// 2. 업데이트 (Update): 상태나 props가 변경되어 컴포넌트가 다시 렌더링될 때 발생하는 단계
// 3. 언마운트 (Unmount): 컴포넌트가 DOM에서 제거될 때 발생하는 단계

// 클래스형 컴포넌트의 주요 라이프사이클 메서드
// componentDidMount(): 컴포넌트가 처음 렌더링된 후 실행
// componentDidUpdate(): 컴포넌트가 업데이트된 후 실행
// componentWillUnmount(): 컴포넌트가 언마운트(제거)되기 직전에 실행

import React, { Component, useEffect, useState } from "react";

export class LifeCycleClass extends Component {
  constructor(props) {
    // 생성자
    super(props); // 부모생성자 함수 호출
    this.state = {
      // 상태 변수 선언
      count: 0,
    };
  }
  // 마운트 발생 시 호출됨 (mount)
  componentDidMount() {
    console.log("컴포넌트가 마운트됨");
  }
  // 언마운트 발생 시 호출됨 (unmount)
  componentWillUnmount() {
    console.log("컴포넌트가 언마운트됨");
  }
  // 상태 or props가 변경 시 호출됨 (update)
  componentDidUpdate() {
    console.log(`컴포넌트가 업데이트됨 ${this.state.count}`);
  }
  render() {
    return (
      <div>
        <h1>리액트 라이프사이클(클래스형)</h1>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// 함수형 컴포넌트에서는 useEffect Hook로 라이프사이클을 관리
// useEffect는 다음과 같은 역할을 할 수 있습니다:
// useEffect(() => {}, []): 컴포넌트가 마운트될 때 실행
// useEffect(() => {}, [state]): 의존성 배열이 변경될 때 실행
// return () => {}: 컴포넌트가 언마운트될 때 실행 (클린업 함수)

// 함수형 컴포넌트
export function LifecycleFunc() {
  //   상태변수 상태설정함수  초기값
  const [count, setCount] = useState(0);

  // 마운트 & 언마운트
  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
    return () => {
      console.log("컴포넌트가 언마운트 되었습니다.");
    };
  }, []);
  // 업데이트
  useEffect(() => {
    console.log("컴포넌트가 업데이트 되었습니다.");
  }, [count]); // 의존성 상태변수 배열을 설정 (count가 바뀌는지 안바뀌는지 계속 추적함)

  /*
  useEffect(()=>{}, [])의 [] : 의존성 배열
  - 의존성 배열은 배열에 포함된 값들의 변화에 따라 useEffect가 실행되는 방식을 결정
  - useEffect는 컴포넌트가 렌더링 될 때 실행
    여기에 의존성 배열을 설정 => 특정 조건에서만 실행되도록 제어
  - 의존성 배열이 빈 배열 [] 인 경우
    - 컴포넌트가 처음 마운트될 때(처음 렌더링)만 실행
    - 이후 다시 실행X
  - 의존성 배열이 빈 배열X 경우
    - 처음 마운트 될 때 실행
    - 변수 값이 변경(업데이트)될 때 마다 실행 
  - 의존성 배열이 없는 경우
    - 컴포넌트가 마운트 될 때 실행
    - 리렌더링 될 때 마다 실행 (업데이트 될 때도 계속 실행)
*/

  return (
    <div>
      <h1>리액트 라이프사이클(함수형 컴포넌트 방식)</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

// 부모 컴포넌트
export function Lifecycle() {
  const [showComponent, setShowComponent] = useState(true);

  // 조건부 렌더링
  // 1. if else
  // 2. 삼항연산자
  // 3. 논리연산자(&& ||)
  return (
    <div style={{ padding: "20px" }}>
      {showComponent && <LifecycleFunc />}
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "컴포넌트 제거" : "컴포넌트 추가"}
      </button>
    </div>
  );
}

export default LifeCycleClass;
