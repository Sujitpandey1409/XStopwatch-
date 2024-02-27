import axios from "axios";
import Template from "../Components/Template";
import './XCountriesSearch.css'
import { useEffect, useState } from "react";

function XCountriesSearch() {
  const [countryInfo, setCountryInfo] = useState([]);
  const [countryInfoTemp, setCountryInfoTemp] = useState([]);
  const handleChange = (e)=>{
    let inputVal = e.target.value
    console.log(inputVal);
    const filteredData = countryInfoTemp.filter((el)=>el.name.common.toLowerCase().includes(inputVal.toLowerCase()))
    setCountryInfo(filteredData)
  }
  useEffect(() => {
    let getData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountryInfo(response.data);
        setCountryInfoTemp(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, []);
  return (
    <div className="searchApp">
      <input onChange={handleChange} type="text" placeholder="Search for countries..."/>  
    <div className="card-container">
      {countryInfo.map((el, i) => (
        <Template
          id={i}
          title={el.name.common}
          src={el.flags.png}
          alt={el.flags.alt}
        />
      ))}
    </div>
    </div>
  );
}

export default XCountriesSearch;
