import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Screen from "./components/Screen/Screen";
import SoloBattleModeSelector from "./components/SoloBattleModeSelector/SoloBattleModeSelector";
import TrainingBattle from "./components/TrainingBattle/TrainingBattle";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/solo" element={<SoloBattleModeSelector />} />
          <Route path="/solo/training" element={<TrainingBattle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
