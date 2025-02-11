import styled from "styled-components";

const Aside = styled.aside`
  background-color: yellow;
  height: 300px;
  width: 30%;
  align-content: center;
  border: 1px solid black;
`;

export default function AsideComponent() {
  return <Aside>Aside</Aside>;
}
