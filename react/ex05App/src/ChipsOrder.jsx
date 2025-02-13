import styled from "styled-components";
import chipsImg from "./img/chips.jpg";
import logoImg from "./img/kioskLogo.png";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${chipsImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.div`
  color: white;
  margin-left: 40px;
  padding-top: 150px;
`;

const QnaContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0;
  padding-top: 10px;
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #453e3e;
  background-color: #fed801;
`;

const OrderContainer = styled.div`
  width: 100%;
  height: 220px;
  padding: 0;
  margin: 0;
  background-color: #274b36;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const OrderButton = styled.button`
  width: 260px;
  height: 50px;
  border: 1.5px solid white;
  border-radius: 25px;
  background-color: #274b36;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export default function Ex05Component() {
  const textStyle = {
    margin: "0",
    fontWeight: "500",
    fontSize: "larger",
  };
  const smallTextStyle = {
    margin: "0",
  };
  return (
    <BodyWrap>
      <ImgContainer>
        <TextContainer>
          <p style={textStyle}>포테이토 치즈스틱</p>
          <p style={smallTextStyle}>Potato Cheese stick</p>
        </TextContainer>
      </ImgContainer>
      <QnaContainer>
        <ul>
          <li>쿠폰 및 모바일 상품권 사용은 카운터에 문의해 주세요.</li>
          <li>
            현금 결제는 카운터에서만 가능 Please pay at Front Counter for Cash
          </li>
        </ul>
      </QnaContainer>
      <OrderContainer>
        <OrderButton>주문하시려면 터치하세요.</OrderButton>
        <img src={logoImg} style={{ marginLeft: "15px", height: "70px" }}></img>
      </OrderContainer>
    </BodyWrap>
  );
}
