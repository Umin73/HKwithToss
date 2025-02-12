import styled from "styled-components";
import SectionComponent from "./Section";
import AsideComponent from "./Aside";

const Contents = styled.div`
  display: flex;
`;

export default function ContentsComponent() {
  return (
    <Contents>
      <SectionComponent />
      <AsideComponent />
    </Contents>
  );
}
