
import { Routes, Route } from "react-router-dom";
import './App.css';
import Stopwatch from './Components/Stopwatch';
import FullNameDisplay from "./Pages/FullNameDisplay";
import Nav from "./Components/Navbar";

function App() {
  return (
    <>
      <Nav />
    <div className="App">
      <Routes>
        <Route path='/' element={<Stopwatch />}/>
        <Route path='/displayName' element={<FullNameDisplay />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
