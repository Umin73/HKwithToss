import styled from "styled-components";
import AsideComponent from "./Aside";
import SectionComponent from "./Section";

const Main = styled.header`
  display: flex;
`;

export default function MainComponent() {
  return (
    <Main>
      <AsideComponent />
      <SectionComponent />
    </Main>
  );
}
