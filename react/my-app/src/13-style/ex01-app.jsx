import styled from "styled-components";

const Div = styled.div`
  align-content: center;
  color: white;
  margin: 20px;
  text-align: center;
`;

const Header = styled.div`
  background-color: purple;
  height: 70px;
  align-content: center;
  border: 1px solid black;
`;
const Nav = styled.div`
  background-color: green;
  height: 70px;
  align-content: center;
  border: 1px solid black;
`;
const Section = styled.section`
  background-color: blue;
  height: 300px;
  width: 70%;
  align-content: center;
  border: 1px solid black;
`;
const Aside = styled.aside`
  background-color: yellow;
  height: 300px;
  width: 30%;
  align-content: center;
  border: 1px solid black;
`;
const Contents = styled.div`
  display: flex;
`;
const Footer = styled.footer`
  background-color: #255725;
  height: 70px;
  align-content: center;
  border: 1px solid black;
`;

export default function Ex01Component() {
  return (
    <Div>
      <Header>Header</Header>
      <Nav>Nav</Nav>
      <Contents>
        <Section>Section</Section>
        <Aside>Aside</Aside>
      </Contents>
      <Footer>Footer</Footer>
    </Div>
  );
}
