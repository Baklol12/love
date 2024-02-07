import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Second from "./components/Second"
import Third from "./components/Third"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/second" element={<Second/>}></Route>
          <Route exact path="/third" element={<Third/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
