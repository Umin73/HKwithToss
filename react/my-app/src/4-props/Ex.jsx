//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.
function Greeting(props) {
  return (
    <div>
      <h1>{props.name}님!</h1>
    </div>
  );
}

export function Props1() {
  return (
    <>
      <Greeting name="김땡땡" />
      <Greeting name="이땡땡" />
      <Greeting name="박땡땡" />
    </>
  );
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.
function UserCard(props) {
  return (
    <div>
      {props.name}님은 {props.age}살이고, 직업은 {props.job}입니다.
    </div>
  );
}
export function Props2() {
  return (
    <>
      <UserCard name="김땡땡" age="25" job="웹개발자" />
      <UserCard name="이땡땡" age="29" job="앱개발자" />
    </>
  );
}

// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.
function ItemList(props) {
  return (
    <div>
      <h2>{props.listTitle}</h2>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Props3() {
  return (
    <>
      <ItemList listTitle="itemList" items={["itemA", "itemB", "itemC"]} />
      <ItemList listTitle="과일 리스트" items={["사과", "바나나", "키위"]} />
    </>
  );
}

// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.
function ClickButton(props) {
  return <button onClick={props.onClickFunc}>버튼</button>;
}
export function Props4() {
  function handleClick() {
    alert("클릭!");
  }

  return (
    <>
      <ClickButton onClickFunc={handleClick}></ClickButton>
    </>
  );
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.
function InfoCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
// 자식 컴포넌트(child component)
// 자식 요소(child element) : props.children
export function Props5() {
  return (
    <>
      <InfoCard title="카드">
        <p>카드 본문입니다.</p>
      </InfoCard>
      <InfoCard title="카드2">
        <p>카드 본문2입니다.</p>
      </InfoCard>
    </>
  );
}
