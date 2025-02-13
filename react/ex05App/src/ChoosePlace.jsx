import styled from "styled-components";
import ReturnToKiosk from "./ReturnToKiosk";
import kioskLogo from "./img/kioskLogo.png";
import takeawayImg from "./img/포장하기.png";
import eatingHereImg from "./img/먹고가기.png";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #274b36;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding-top: 30px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChooseBtnContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 50px;
`;

const ChooseBtn = styled.button`
  width: 150px;
  height: 250px;
  background-color: white;
  border-radius: 15px;
  border: none;
  padding-top: 20px;
`;

const ChooseBtnText = styled.p`
  padding: 0;
  color: red;
  font-weight: 600;
  font-size: 15px;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 195px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ChoosePlaceComponent() {
  const textStyle = {
    color: "white",
    fontWeight: "500",
    fontSize: "larger",
  };

  return (
    <BodyWrap>
      <LogoContainer>
        <img
          src={kioskLogo}
          style={{ marginLeft: "15px", height: "70px" }}
        ></img>
      </LogoContainer>
      <ContentsContainer>
        <p style={textStyle}>식사하실 장소를 선택해 주세요.</p>
        <ChooseBtnContainer>
          <ChooseBtn>
            <img src={eatingHereImg}></img>
            <ChooseBtnText>매장에서 식사</ChooseBtnText>
          </ChooseBtn>
          <ChooseBtn>
            <img src={takeawayImg}></img>
            <ChooseBtnText>테이크 아웃</ChooseBtnText>
          </ChooseBtn>
        </ChooseBtnContainer>
      </ContentsContainer>
      <FooterContainer>
        <ReturnToKiosk />
      </FooterContainer>
    </BodyWrap>
  );
}
