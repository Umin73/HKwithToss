import styled from "styled-components";

const Body = styled.body`
  margin: 0;
  text-decoration: none;
  background-color: aqua;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <Body>
      <Wrapper></Wrapper>
    </Body>
  );
}
