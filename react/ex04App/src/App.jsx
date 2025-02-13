import styled from "styled-components";
import HeaderComponent from "./Header";
import Section from "./Section";
import Footer from "./Footer";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`;

export default function Ex04Component() {
  return (
    <BodyWrap>
      <HeaderComponent></HeaderComponent>
      <Section />
      <Footer />
    </BodyWrap>
  );
}
