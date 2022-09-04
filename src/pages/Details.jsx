import './css/details.css';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/extensions
import { FaAngleLeft, FaMicrophoneAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { getCountries } from '../redux/countries/countries';
// eslint-disable-next-line import/extensions
import CountryDisplay from '../components/CountryDisplay';

const Details = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countryIndex = countries.findIndex((country) => country.name.common === name );

  return (
    <div className="details">
      <div className="nav-bar">
        <Link to="/">
          <FaAngleLeft color="white" fontSize="1.5rem" />
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
      <CountryDisplay country={countries[countryIndex]} />
    </div>
  );
};

export default Details;
