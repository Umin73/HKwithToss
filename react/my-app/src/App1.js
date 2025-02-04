//  default   그 외
import E1, * as E from "./1-element/Element";
import Namecard, * as ex from "./1-element/Ex";

function App() {
  // 이 방식은 JSX로 렌더링 하지 않고,
  // React 컴포넌트 자체 또는 JSX요소로 작성된 변수를 반환하는 경우
  // return E1;

  // 이 방식은 React의 함수형(클래스형) 컴포넌트를
  // JSX 문법으로 호출하여 반환하는 경우
  let user = "홍길동";
  let age = 25;
  // return <E.Hello name={user} />;
  // return <E.ConfirmDialog color="red" />;

  // return <ex.Greeting name={user} age={age} />;
  return <ex.PrintPrice />;
}

export default App;
