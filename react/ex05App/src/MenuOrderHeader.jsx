import styled from "styled-components";
import kioskLogo from "./img/kioskLogo.png";
import homeImg from "./img/HOME.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 20px solid #274b36;
`;

export default function MenuOrderComponent() {
  return (
    <HeaderContainer>
      <img src={kioskLogo} style={{ width: "200px", marginLeft: "10px" }} />
      <img src={homeImg} style={{ width: "80px", marginRight: "10px" }} />
    </HeaderContainer>
  );
}
