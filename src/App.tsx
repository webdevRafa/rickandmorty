import "./App.css";
import Header from "./Components/Header";
import ricky from "../src/imgs/ricky.gif";
import Characters from "./Components/Characters";

function App() {
  return (
    <>
      <Header></Header>
      <div className="fixed top-0 left-0 w-full h-[100vh]">
        <img className="w-full h-full object-cover" src={ricky} alt="" />
      </div>

      <Characters></Characters>
    </>
  );
}

export default App;
