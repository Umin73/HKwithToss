import styled from "styled-components";
import kioskLogo from "./img/kioskLogo.png";
import baconBurger from "./img/베이컨버거.png";
import cheeseBurger from "./img/치즈버거.png";

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
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TotalContainer = styled.div`
  width: 83%;
  height: 95%;
  margin: 20px;
  background-color: white;
  border-radius: 15px;
`;

const TotalPrice = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px dashed #274b36;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 0 5px;
`;

const CancelButton = styled(ActionButton)`
  background-color: red;
`;

const CheckoutButton = styled(ActionButton)`
  background-color: #274b36;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px dashed #274b36;
  padding: 15px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  color: white;
`;

const MinusButton = styled(Button)`
  background-color: red;
`;

const PlusButton = styled(Button)`
  background-color: #274b36;
`;

const DeleteButton = styled.button`
  background-color: #274b36;
  color: white;
  border: none;
  padding: 8px 10px;
  margin-left: 70px;
  font-size: 14px;
  border-radius: 5px;
`;

export default function ChoosePlaceComponent() {
  const cartItems = [
    { id: 1, name: "베이컨버거", price: 5500, quantity: 1, img: baconBurger },
    { id: 2, name: "치즈버거", price: 4500, quantity: 1, img: cheeseBurger },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
        <p style={textStyle}>주문을 확인 하세요.</p>
        <TotalContainer>
          <TotalPrice>총 금액 : {totalPrice.toLocaleString()}원</TotalPrice>
          {/* {cartItems.map((item) => (
            <OrderedItem key={item.id} item={item} />
          ))} */}
          <ItemContainer>
            <ItemImage src={baconBurger} />
            <ItemInfo>
              <ItemName>베이컨버거</ItemName>
              <ItemPrice>₩5,500</ItemPrice>
              <QuantityControls>
                <MinusButton>-</MinusButton>
                <span>{1}</span>
                <PlusButton>+</PlusButton>
                <DeleteButton>삭제하기</DeleteButton>
              </QuantityControls>
            </ItemInfo>
          </ItemContainer>
          <ItemContainer style={{ borderBottom: "2px solid #274b36" }}>
            <ItemImage src={baconBurger} />
            <ItemInfo>
              <ItemName>치즈버거</ItemName>
              <ItemPrice>₩4,500</ItemPrice>
              <QuantityControls>
                <MinusButton>-</MinusButton>
                <span>{1}</span>
                <PlusButton>+</PlusButton>
                <DeleteButton>삭제하기</DeleteButton>
              </QuantityControls>
            </ItemInfo>
          </ItemContainer>
          <ButtonContainer>
            <CancelButton>이전으로</CancelButton>
            <CheckoutButton>결제하기</CheckoutButton>
          </ButtonContainer>
        </TotalContainer>
      </ContentsContainer>
    </BodyWrap>
  );
}
