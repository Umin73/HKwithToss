import styled from "styled-components";

const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HeaderComponent() {
  const h1Style = {
    fontFamily: "Nanum Gothic",
    fontWeight: "400",
    fontStyle: "normal",
  };
  return (
    <Header>
      <h1 style={h1Style}>골든리트리버 - Golden Retriever</h1>
    </Header>
  );
}
