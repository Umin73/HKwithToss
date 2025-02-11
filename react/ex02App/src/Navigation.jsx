import styled from "styled-components";

const Navigation = styled.nav`
  height: 30px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NavComponent() {
  const aStyle = {
    marginRight: "5px",
    color: "white",
    textDecoration: "none",
  };
  return (
    <Navigation>
      <a href="#" style={aStyle}>
        About
      </a>
      <a href="#" style={aStyle}>
        History
      </a>
      <a href="#" style={aStyle}>
        Information
      </a>
      <a href="#" style={aStyle}>
        SNS
      </a>
    </Navigation>
  );
}
