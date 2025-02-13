import styled from "styled-components";
import kiosk from "./img/returnToKiosk.jpg";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #274b36;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ChoosePlaceComponent() {
  const imgStyle = {
    width: "70px",
  };
  return (
    <BodyWrap>
      <img src={kiosk} style={imgStyle} />
    </BodyWrap>
  );
}
