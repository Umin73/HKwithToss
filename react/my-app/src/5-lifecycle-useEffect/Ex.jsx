import React, { Component, useState, useEffect } from "react";
import axios from "axios";
// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.

export function ExLifecycle() {
  const [showComponent, setShowComponent] = useState(0);

  // return <div>{showComponent && <LifeCycleFunc1 />}</div>;
  return (
    <div>
      {showComponent && <LifeCycleFunc5 />}
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "컴포넌트 제거" : "컴포넌트 생성"}
      </button>
    </div>
  );
}

export function LifeCycleFunc1() {
  // 마운트
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.
export function LifeCycleFunc2() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);
  useEffect(() => {
    console.log("상태값이 변경되었습니다.");
  }, [state]);

  return (
    <div>
      <p>State: {state}</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        상태값 올리기
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용
export function LifeCycleFunc3() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 마운트됨");

    const id = setInterval(() => {
      // prev: 이전 상태 값
      // prev를 사용하면 React가 보장하는 최신 상태 값에 기반해
      // 안전하게 상태를 업데이트 할 수 있음
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("컴포넌트가 언마운트됨");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>time: {timer}초</p>
    </div>
  );
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener
export function LifeCycleFunc4() {
  const [windowSize, setWindowSize] = useState(
    window.innerHeight * window.innerWidth
  );
  const handleWindowSize = () => {
    setWindowSize(window.innerHeight * window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [windowSize]);

  return (
    <div>
      <p>현재 윈도우의 가로*세로 = {windowSize}px</p>
    </div>
  );
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.

// async/await 구문: JS에서 비동기적인 처리를 할 때 사용하는 구문
// promise/then 구문:

export function LifeCycleFunc5() {
  const [data, setData] = useState([]);

  const CallApi = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      // axios는 기본 응답이 json 형태
      setData(res.data.slice(0, 10));
    });
  };

  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
    CallApi(); // 마운트 시에 한번만 호출
  }, []);

  return (
    <div>
      <h1>api 호출</h1>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
