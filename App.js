import { Suspense } from "react";
import "./App.css";
import Axios from "./Axios";
// import Fetch from "./Fetch";
// import ReactQuery from "./ReactQuery";
// import Swr from "./Swr";
function App() {
  return (
    <div className="App">
  {/* { <Fetch /> } */}
      <Axios />
      {/* <Swr /> */}
       {/* <ReactQuery /> */}
    </div>
  );
}

export default App;
