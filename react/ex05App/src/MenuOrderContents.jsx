import styled from "styled-components";
import burger1 from "./img/베이컨버거.png";
import burger2 from "./img/치즈버거.png";
import burger3 from "./img/치킨버거.png";
import burger4 from "./img/불고기버거.png";

const MenuContainer = styled.div`
  padding: 20px;
  flex: 1;
`;

const Title = styled.h2`
  color: #333;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
`;

const MenuItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
`;

const MenuImage = styled.img`
  width: 80px;
  height: 80px;
`;

const Price = styled.p`
  font-size: 16px;
`;

export default function Contents() {
  const menuItems = [
    { name: "베이컨버거", price: "₩5,500", img: burger1 },
    { name: "치즈버거", price: "₩4,500", img: burger2 },
    { name: "치킨버거", price: "₩5,500", img: burger3 },
    { name: "불고기버거", price: "₩4,500", img: burger4 },
  ];

  return (
    <MenuContainer>
      <Title>에프엔제이 버거 메뉴</Title>
      <MenuGrid>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuImage src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <Price>{item.price}</Price>
          </MenuItem>
        ))}
      </MenuGrid>
    </MenuContainer>
  );
}
