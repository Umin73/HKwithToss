import styled from "styled-components";
import HeaderComponent from "./Header";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`;

export default function Ex04Component() {
  return (
    <BodyWrap>
      <HeaderComponent></HeaderComponent>
    </BodyWrap>
  );
}
