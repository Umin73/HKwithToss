import styled from "styled-components";
import FJIcon from "./img/에펜데이.png";
import drinkIcon from "./img/음료커피.png";
import setMenuIcon from "./img/버거세트.png";
import sideMenuIcon from "./img/사이드메뉴.png";

const SidebarContainer = styled.div`
  width: 70px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const MenuItem = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid #274b36;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export default function Sidebar() {
  const menuItems = [
    { name: "에펜데이", img: FJIcon },
    { name: "음료&커피", img: drinkIcon },
    { name: "버거&세트", img: setMenuIcon },
    { name: "사이드", img: sideMenuIcon },
  ];

  return (
    <SidebarContainer>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>
          <Icon src={item.img} alt={item.name} />
          <p style={{ fontSize: "10px" }}>{item.name}</p>
        </MenuItem>
      ))}
    </SidebarContainer>
  );
}
