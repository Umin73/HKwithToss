import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: "none", padding: "0", display: "flex" }}>
        <li style={{ marginRight: "7px" }}>
          <Link to="/">홈</Link>
        </li>
        <li style={{ marginRight: "7px" }}>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/contact">연락처</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
