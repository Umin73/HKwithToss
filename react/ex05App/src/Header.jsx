import styled from "styled-components";
import logoImg from "./img/kioskLogo.png";

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f9e69a;
`;

export default function HeaderComponent() {
  return (
    <Header>
      <img
        src={logoImg}
        style={{ marginLeft: "15px", marginTop: "15px", height: "70px" }}
      ></img>
    </Header>
  );
}
