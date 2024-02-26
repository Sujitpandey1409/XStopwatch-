import axios from "axios";
import React, { useEffect, useState } from "react";
import './XStates.css'
const States = () => {
  const [countryData, setCountryData] = useState();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();
  const [currentCountry, setCountry] = useState();
  const [currentState, setState] = useState();
  const [currentCity, setCity] = useState();

  useEffect(()=>{
      const fetchCountry = async()=>{try {
        const Countries = await axios.get(
          "https://crio-location-selector.onrender.com/countries"
        );
        console.log(Countries.data);
        setCountryData(Countries.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }}
      fetchCountry();
  },[])
  const handleChangeCountry = async (e) => {
    let selectedCountry = e.target.value;
    setCountry(selectedCountry);
    try {
      const States = await axios.get(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
      );
      console.log(States.data);
      setStateData(States.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleChangeState = async (e) => {
    let selectedState = e.target.value;
    setState(selectedState);
    try {
      const Cities = await axios.get(
        `https://crio-location-selector.onrender.com/country=${currentCountry}/state=${selectedState}/cities`
      );
      console.log(Cities.data);
      setCityData(Cities.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="optionContainer">
        <h1>Select Location</h1>
      <select value={currentCountry} onChange={handleChangeCountry}>
        <option value="Select Country">Select Country</option>
        {countryData&&countryData.map((el, i) => {
          return <option value={el} key={i}>
            {el}
          </option>;
        })}
      </select>
      {!currentCountry ? (
        <select value="Select State" disabled={true}>
          <option value="Select State">Select State</option>
        </select>
      ) : (
        <select value={currentState} onChange={handleChangeState}>
          <option value="Select State">Select State</option>
          {stateData&&stateData.map((el, i) => 
            {return<option value={el} key={i}>
              {el}
            </option>;}
          )}
        </select>
      )}

      {!currentState ? (
        <select value="Select City" disabled={true}>
          <option value="Select City">Select City</option>
        </select>
      ) : (
        <select value={currentCity} onChange={(e) => setCity(e.target.value)}>
          <option value="Select City">Select City</option>
          {cityData&&cityData.map((el, i) => {
            return <option value={el} key={i}>
              {el}
            </option>;
          })}
        </select>
      )}
      {currentState&&currentCountry&&currentCity&&<p><span className="cityState"> You selected <b style={{fontSize:'33px'}}>{currentCity}</b>,</span> {currentState}, {currentCountry}</p>}
      {/* {currentState&&currentCountry&&currentCity&&<p>You selected {currentCity}, {currentState}, {currentCountry}</p>} */}
    </div>
  );
};

export default States;
