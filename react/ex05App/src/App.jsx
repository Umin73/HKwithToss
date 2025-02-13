import styled from "styled-components";
import HeaderComponent from "./page_home/Header";
import ContentsComponent from "./page_home/Contents";
import FooterComponent from "./page_home/Footer";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export default function Ex05Component() {
  return (
    <BodyWrap>
      <HeaderComponent></HeaderComponent>
      <ContentsComponent></ContentsComponent>
      <FooterComponent></FooterComponent>
    </BodyWrap>
  );
}
