import './css/details.css';
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleLeft, FaMicrophoneAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { getCountries } from "../redux/countries/countries.js";

const Details = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    dispatch(getCountries());

  }, [dispatch]);

  const countryIndex = countries.findIndex((country) => country.name.common === name );
  console.log(countries[countryIndex].name.common);
  return (
    <div className="details">
      <div className="nav-bar">
        <Link to="/">
          <FaAngleLeft color="white" fontSize="1.5rem"/>
        </Link>
        <p>{countries[countryIndex].name.common}</p>
        <div className="nav-utils">
          <p>
            <FaMicrophoneAlt />
          </p>

          <p>
            <AiFillSetting />
          </p>
        </div>
      </div>
      <div className="country-info">
        <div className="country-basic-info">
          <img
            className="country-img"
            src={countries[countryIndex].coatOfArms.png}
            alt="coat-of-arms"
          />
        </div>
      </div>
      <div className="country-info-header">
        <p className="">COUNTRY INFORMATION</p>
      </div>
      <div className="non-highlighted">
        <p className="country-name">Country Name</p>
        <p>
          {countries[countryIndex].name.common}
        </p>

      </div>
      <div className="highlighted">
        <p>Land Size</p>
        <p>
          {countries[countryIndex].area.toLocaleString()}
        </p>

      </div>
      <div className="non-highlighted">
        <p>Capital City</p>
        <p>
          {countries[countryIndex].capital}

        </p>

      </div>
      <div className="highlighted">
        <p>Country Population</p>
        <p>
          {countries[countryIndex].population.toLocaleString()}
        </p>
      </div>
      <div className="non-highlighted">
        <p>Continent</p>
        <p>
          {countries[countryIndex].continents}
        </p>
      </div>
      <div className="highlighted">
        <p>Independent</p>
        <p>
          {countries[countryIndex].independent ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
}

export default Details;
