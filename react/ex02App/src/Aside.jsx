import styled from "styled-components";
import dogImg from "./dog.png";

const Aside = styled.header`
  flex-basis: 3;
  margin: 10px;
  border: 1px solid green;
  padding: 20px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const LI = styled.li`
  text-decoration: none;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export default function AsideComponent() {
  return (
    <Aside>
      <h4>Golden Retriever</h4>
      <Img src={dogImg} alt="리트리버" />
      <Ul>
        <LI>● 기본특성</LI>
        <LI>● 단점</LI>
        <LI>● 키울 시 주의점</LI>
        <LI>● 파생 혼종견</LI>
      </Ul>
    </Aside>
  );
}
