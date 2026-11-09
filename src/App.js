import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </Router>
  );
}

export default App;
