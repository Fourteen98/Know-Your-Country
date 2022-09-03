import React from 'react';

// eslint-disable-next-line react/prop-types
const CountryDisplay = ({ country }) => (

  <>
    <div className="country-info">
      <div className="country-basic-info">
        <img
          className="country-img"
          src={country.coatOfArms.png}
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
        {country.name.common}
      </p>

    </div>
    <div className="highlighted">
      <p>Land Size</p>
      <p>
        {country.area.toLocaleString()}
      </p>

    </div>
    <div className="non-highlighted">
      <p>Capital City</p>
      <p>
        {country.capital}

      </p>

    </div>
    <div className="highlighted">
      <p>Country Population</p>
      <p>
        {country.population.toLocaleString()}
      </p>
    </div>
    <div className="non-highlighted">
      <p>Continent</p>
      <p>
        {country.continents}
      </p>
    </div>
    <div className="highlighted">
      <p>Independent</p>
      <p>
        {country.independent ? 'Yes' : 'No'}
      </p>
    </div>
  </>
);

export default CountryDisplay;
