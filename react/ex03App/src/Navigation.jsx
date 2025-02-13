import "./index.css";

function Nav() {
  const navStyle = {
    display: "flex",
    marginRight: "20px",
    alignItems: "center",
    jusifyContent: "center",
  };

  const navUlStyle = {
    display: "flex",
    flexDirection: "row",
    lineHeight: "40px",
  };

  const navLiStyle = {
    padding: "0 20px",
    position: "relative",
    width: "110px",
  };

  return (
    <div id="nav" style={navStyle}>
      <ul className="mainMenu" style={navUlStyle}>
        <li className="menu" style={navLiStyle}>
          <a href="">제품</a>
          <ul className="submenu">
            <li>
              <a href="#">전자기기</a>
            </li>
            <li>
              <a href="#">의류</a>
            </li>
            <li>
              <a href="#">도서</a>
            </li>
            <li>
              <a href="#">액세사리</a>
            </li>
          </ul>
        </li>
        <li className="menu" style={navLiStyle}>
          <a href="#">서비스</a>
          <ul className="submenu">
            <li>
              <a href="#">컨설팅</a>
            </li>
            <li>
              <a href="#">교육</a>
            </li>
            <li>
              <a href="#">고객지원</a>
            </li>
            <li>
              <a href="#">유지보수</a>
            </li>
          </ul>
        </li>
        <li className="menu" style={navLiStyle}>
          <a href="#">회사소개</a>
          <ul className="submenu">
            <li>
              <a href="#">회사정보</a>
            </li>
            <li>
              <a href="#">팀 소개</a>
            </li>
            <li>
              <a href="#">채용정보</a>
            </li>
            <li>
              <a href="#">연락처</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
