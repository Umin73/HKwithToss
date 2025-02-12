import styled from "styled-components";

const Footer = styled.header`
  background-color: lightgray;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const A = styled.a`
  margin-right: 5px;
  color: black;
`;
export default function FooterComponent() {
  return (
    <Footer>
      <A href="#">Subscribe</A>
      <A href="#">About Author</A>
      <A href="#">Send us Email</A>
    </Footer>
  );
}
