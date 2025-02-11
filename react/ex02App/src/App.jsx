import styled from "styled-components";
import HeaderComponent from "./Header";
import NavComponent from "./Navigation";
import MainComponent from "./Contents";
import FooterComponent from "./Footer";

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
      <Wrapper>
        <HeaderComponent />
        <NavComponent />
        <MainComponent />
        <FooterComponent />
      </Wrapper>
    </Body>
  );
}
