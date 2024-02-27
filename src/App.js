
import { Routes, Route } from "react-router-dom";
import './App.css';
import Stopwatch from './Components/Stopwatch';
import FullNameDisplay from "./Pages/FullNameDisplay";
import Nav from "./Components/Navbar";
import Counter from "./Pages/Counter";
import LogIn from "./Pages/Login";
import Calculator from "./Pages/Calculator";
import States from "./Pages/XStates";
import XCountriesSearch from "./Pages/XCountriesSearch";

function App() {
  return (
    <>
      <Nav />
    <div className="App">
      <Routes>
        <Route path='/' element={<Stopwatch />}/>
        <Route path='/displayName' element={<FullNameDisplay />}/>
        <Route path='/CounterApp' element={<Counter />}/>
        <Route path='/XLogin' element={<LogIn />}/>
        <Route path='/XCalculator' element={<Calculator />}/>
        <Route path='/XStates' element={<States />}/>
        <Route path='/XCountriesSearch' element={<XCountriesSearch />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
