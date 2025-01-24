class Greeting extends React.Components {
  render() {
    return <h1 className="greeting">Hello world!! (1)</h1>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Greeting));
