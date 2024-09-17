import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home";
import Event from "./pages/Event";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className=""></div> */}
      <div>
        <Event />
      </div>
    </>
  );
}

export default App;
