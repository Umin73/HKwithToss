// StyledComponent1.jsx
import styled from "styled-components";

//styled-components 모듈 사용 : JSX-html문법, SC는 css문법을 그대로 따름.
// 모듈 설치
// npm i styled-components

const Button = styled.button`
  /* css 문법 사용 */
  color: red;
  /* background-color: lightblue; */
  background-color: ${(props) => (props.dark ? "navy" : "lightblue")};
  font-size: 24px;
  border: 1px solid green;
  margin-left: 5px;
`;

export default function StyledComponent1() {
  return (
    <div>
      <Button>Normal</Button>
      <Button dark="dark">Dark</Button>
    </div>
  );
}
