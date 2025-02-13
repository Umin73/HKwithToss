import styled from "styled-components";
import adImg from "./img/광고.png";

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FooterComponent() {
  const adImgStyle = {
    width: "380px",
  };
  return (
    <Footer>
      <img src={adImg} style={adImgStyle}></img>
    </Footer>
  );
}
