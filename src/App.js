
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
import Xpagination from "./Pages/Xpagination";
import XWeatherApp from "./Pages/XWeatherApp";
import SpellCheckApp from "./Pages/SpellCheckApp";

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
        <Route path='/XPagination' element={<Xpagination />}/>
        <Route path="/XWeatherApp" element={<XWeatherApp/>}/>
        <Route path="/XSpellCheckApp" element={<SpellCheckApp/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
