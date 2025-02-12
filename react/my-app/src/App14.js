// App5.js
import React from "react";
// import InlineStyle, * as E from "./13-style/Style";
import ThemeContextProvider from "./14-context/ThemeContextProvider";

function App() {
  return <ThemeContextProvider initTheme="light" />;
}

export default App;
