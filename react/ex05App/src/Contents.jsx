import styled from "styled-components";
import cate1Img from "./img/햄버거.png";
import cate2Img from "./img/커피.png";
import cate3Img from "./img/병원.png";
import cate4Img from "./img/ATM.png";
import cate5Img from "./img/KTX.png";
import cate6Img from "./img/버스.png";

const Contents = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 70px;
`;

const Category = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 17px;
  margin: 15px;
  box-shadow: 2px 2px 2px 2px #c2c2c2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  flex: "1 1 40%";
  /* gap: -50px; */
`;

const CategoryName = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  text-align: center;
  font-weight: 600;
  padding-top: 5px;
  color: #7e7e7e;
`;

const NextButton = styled.button`
  position: fixed;
  top: 350px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fef0f6;
  border: none;
  font-size: xx-large;
  color: #da9689;
  text-align: center;
`;

export default function ContentsComponent() {
  const categoryImgStyle = {
    width: "100px",
    height: "70px",
    marginBottom: "0",
    marginTop: "30px",
  };

  return (
    <Contents>
      <NextButton style={{ left: "30px" }}>&lt;</NextButton>
      <NextButton style={{ right: "30px" }}>&gt;</NextButton>
      <Category style={{ backgroundColor: "#ff7519" }}>
        <img src={cate1Img} style={categoryImgStyle}></img>
        <CategoryName>패스트푸드</CategoryName>
      </Category>
      <Category style={{ backgroundColor: "#d1baa2" }}>
        <img src={cate2Img} style={categoryImgStyle}></img>
        <CategoryName>카페</CategoryName>
      </Category>
      <Category style={{ backgroundColor: "#84d499" }}>
        <img src={cate3Img} style={categoryImgStyle}></img>
        <CategoryName>병원</CategoryName>
      </Category>
      <Category style={{ backgroundColor: "#9596e5" }}>
        <img src={cate4Img} style={categoryImgStyle}></img>
        <CategoryName>ATM</CategoryName>
      </Category>
      <Category style={{ backgroundColor: "#b2e5ff" }}>
        <img src={cate5Img} style={categoryImgStyle}></img>
        <CategoryName>KTX</CategoryName>
      </Category>
      <Category style={{ backgroundColor: "#56dbc9" }}>
        <img src={cate6Img} style={categoryImgStyle}></img>
        <CategoryName>버스</CategoryName>
      </Category>
    </Contents>
  );
}
