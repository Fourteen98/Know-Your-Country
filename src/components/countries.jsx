import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, searchCountries } from '../redux/countries/countries';
import './css/countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCountries(search));
  };
  const showAll = (e) => {
    e.preventDefault();
    dispatch(getCountries());
    setSearch('');
  };

  const renderACountry = countries.map((country) => (
    <div key={country.name.common} className="main-country-stat">
      <Link to={`/details/${country.name.common}`}>

        <img className="country-flag" src={country.flags.png} alt="flag" />
        <div className="country-stats">
          <p className="">{country.name.common.toUpperCase()}</p>
          <p className="name-and-population">
            POPULATION: {country.population.toLocaleString()}
          </p>
        </div>
      </Link>

    </div>
  ));
  return (
    <div>
      <div id="search" className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Country"
          onChange={handleChange}
          value={search}
        />
        <div className="button-container">
          <button className="" onClick={handleSearch} type="button">
            Search
          </button>
          <button className="" onClick={showAll} type="button">
            reset
          </button>
        </div>

      </div>
      <div className="countries-main-card">
        <div className="countries-card">{renderACountry}</div>
      </div>
      </div>
  );
}

export default Countries;

