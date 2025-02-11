import styled from "styled-components";

const Section = styled.section`
  background-color: blue;
  height: 300px;
  width: 70%;
  align-content: center;
  border: 1px solid black;
`;

export default function SectionComponent() {
  return <Section>Section</Section>;
}
