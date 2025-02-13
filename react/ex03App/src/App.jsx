import Header from "./Header";
import Contents from "./Contents";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Contents />
    </div>
  );
}
