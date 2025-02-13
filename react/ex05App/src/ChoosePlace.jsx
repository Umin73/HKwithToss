import styled from "styled-components";
import kioskLogo from "./img/kioskLogo.png";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #274b36;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 300px;
`;

export default function ChoosePlaceComponent() {
  return (
    <BodyWrap>
      <LogoContainer>
        <img
          src={kioskLogo}
          style={{ marginLeft: "15px", height: "70px" }}
        ></img>
      </LogoContainer>
      <ContentsContainer></ContentsContainer>
    </BodyWrap>
  );
}
