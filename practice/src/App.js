import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Message></Message>
      <Counter></Counter>
      {/* <Greet firstname="Haswanth" lastname="Royal">
        <p>This is for practice</p>
      </Greet>
      <Greet firstname="Sainath" lastname="Royal">
        <button>Action</button>
      </Greet>
      {/* <Greet firstname></Greet> */}
      {/* <Welcome firstname="Haswanth" lastname="Royal">
        <p>This is for practice</p>
      </Welcome>
      <Welcome firstname="Sainath" lastname="Royal"></Welcome>  */}
    </div>
  );
}

export default App;
