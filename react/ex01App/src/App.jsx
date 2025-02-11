import styled from "styled-components";
import Header from "./Header";
import NavComponent from "./Navigation";
import ContentsComponent from "./Contents";
import FooterComponent from "./Footer";

const Div = styled.div`
  align-content: center;
  color: white;
  margin: 20px;
  text-align: center;
`;

export default function Ex01Component() {
  return (
    <Div>
      <Header />
      <NavComponent />
      <ContentsComponent />
      <FooterComponent />
    </Div>
  );
}
