import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import africa from '../assets/africa.png';
import asia from '../assets/asia.png';
import australia from '../assets/australia.png';
import europe from '../assets/europe.png';
import northAmerica from '../assets/north-america.png';
import southAmerica from '../assets/south-america.png';
import Countries from '../components/Countries.jsx';

const Home = () => {

  return (
    <div className="home">
      <Carousel
        autoPlay
        interval="5000"
        transitionTime="5000"
        infiniteLoop
        showArrows="true"
      >
        <div>
          <img className="continents" src={africa} alt="africa" />
        </div>
        <div>
          <img className="continents" src={asia} alt="asia" />
        </div>
        <div>
          <img className="continents" src={australia} alt="australia" />
        </div>
        <div>
          <img className="continents" src={europe} alt="europe" />
        </div>
        <div>
          <img className="continents" src={northAmerica} alt="north-america" />
        </div>
        <div>
          <img className="continents" src={southAmerica} alt="south-america" />
        </div>

      </Carousel>
      <Countries />
    </div>
  );
}

export default Home;
