import Nav from "./Navigation";

function Header() {
  const headerStyle = {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
  };

  const logoStyle = {
    color: "#2664eb",
    fontWeight: "bold",
    fontSize: "24px",
    display: "flex",
    padding: "0 20px",
    alignItems: "center",
    jusifyContent: "center",
  };

  return (
    <div style={headerStyle}>
      <h2 style={logoStyle}>TechStore</h2>
      <Nav />
    </div>
  );
}

export default Header;
