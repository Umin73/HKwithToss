import React from "react";
import Library from "./2-jsx/Library";
import Hello, { Sum, DrinkMachine, Greeting } from "./2-jsx/Ex";

function App() {
  // return <Library />;
  // return <Hello name="홍길동" />;
  // return <Sum num1="1" num2="2 " />;
  // return <DrinkMachine price="1000" />;
  return <Greeting hour="8" />;
}

export default App;
