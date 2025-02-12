// import { useEffect, useRef } from "react";

// export default function HeaderComponent() {
//   const dropdownRefs = useRef([]); // 여러 개의 ref를 배열로 관리

//   useEffect(() => {
//     dropdownRefs.current.forEach((dropdown, index) => {
//       if (!dropdown) return;
//       const menu = dropdown.querySelector("ul");

//       if (!menu) return;

//       const showMenu = () => {
//         menu.style.display = "block";
//       };

//       const hideMenu = () => {
//         menu.style.display = "none";
//       };

//       dropdown.addEventListener("mouseover", showMenu);
//       dropdown.addEventListener("mouseleave", hideMenu);

//       return () => {
//         dropdown.removeEventListener("mouseover", showMenu);
//         dropdown.removeEventListener("mouseleave", hideMenu);
//       };
//     });
//   }, []);

//   const navbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "15px 30px",
//     boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.1)",
//   };
//   const logoStyle = {
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#007bff",
//   };
//   const menuUlStyle = {
//     listStyle: "none",
//     margin: "0",
//     padding: "0",
//     display: "flex",
//   };
//   const dropdownStyle = {
//     position: "relative",
//   };
//   const dropdownAStyle = {
//     textDecoration: "none",
//     color: "#333",
//     padding: "10px",
//     paddingLeft: "30px",
//     display: "block",
//   };
//   const dropdownMenuStyle = {
//     display: "none",
//     position: "absolute",
//     backgroundColor: "white",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
//     minWidth: "150px",
//     top: "100%",
//     left: "0",
//     zIndex: "100",
//   };
//   const dropdownMenuLiStyle = {
//     margin: "0",
//   };
//   const dropdownMenuLiAStyle = {
//     padding: "10px",
//     display: "block",
//     whiteSpace: "nowrap",
//   };

//   return (
//     <header style={navbarStyle}>
//       <div style={logoStyle}>TechStore</div>
//       <nav>
//         <ul style={menuUlStyle}>
//           {["제품", "서비스", "회사소개"].map((menu, index) => (
//             <li
//               key={index}
//               style={dropdownStyle}
//               ref={(el) => (dropdownRefs.current[index] = el)} // 각 드롭다운에 ref 적용
//             >
//               <a style={dropdownAStyle} href="#">
//                 {menu}
//               </a>
//               <ul style={dropdownMenuStyle}>
//                 {menu === "제품" && (
//                   <>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         전자기기
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         의류
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         도서
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         액세서리
//                       </a>
//                     </li>
//                   </>
//                 )}
//                 {menu === "서비스" && (
//                   <>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         컨설팅
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         교육
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         고객지원
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         유지보수
//                       </a>
//                     </li>
//                   </>
//                 )}
//                 {menu === "회사소개" && (
//                   <>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         회사정보
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         팀 소개
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         채용정보
//                       </a>
//                     </li>
//                     <li style={dropdownMenuLiStyle}>
//                       <a style={dropdownMenuLiAStyle} href="#">
//                         연락처
//                       </a>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
