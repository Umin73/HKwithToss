import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #efefef;
  color: white;
  text-align: center;
  padding-bottom: 15px;
`;

const FooterTittle = styled.div`
  height: 24px;
  background-color: #274b36;
  color: white;
  text-align: left;
  padding-top: 4px;
  padding-left: 10px;
  font-size: 15px;
`;

const OrderButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
`;

const YourOrderContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #274b36;
  width: 95%;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const ResetOrderButton = styled(Button)`
  background-color: #fffffd;
  border: 2px solid #274b36;
  border-radius: 10px;
  color: #5f5f5f;
  height: 40px;
  font-size: 13px;
  margin-right: 10px;
`;

const CancelButton = styled(Button)`
  background-color: red;
`;

const NextButton = styled(Button)`
  background-color: green;
`;

export default function FooterComponent() {
  return (
    <FooterContainer>
      <FooterTittle>주문 내역</FooterTittle>
      <YourOrderContainer>
        <ResetOrderButton>비우기</ResetOrderButton>
      </YourOrderContainer>
      <OrderButtons>
        <CancelButton>주문 취소</CancelButton>
        <NextButton>다음</NextButton>
      </OrderButtons>
    </FooterContainer>
  );
}
