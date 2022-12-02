import React from 'react';
import Bandas from './Bandas';
import './App.css';
import { useEffect, useState } from "react";
import { Img, Col, Row, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [oldest, setOldest] = useState([]);
  const [bands, setBands] = useState([]);
  
  // Function to get the band with the oldest foundation year
  function getOldestBand(bands) {
    let oldestBand = bands[0];
    for (let i = 1; i < bands.length; i++) {
      if (bands[i].foundation_year < oldestBand.foundation_year) {
        oldestBand = bands[i];
      }
    }
    return oldestBand;
  }
  
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json')
      .then(response => response.json())
      .then(data => {
        setBands(data)
        setOldest(getOldestBand(data));   
      });
      
  }
  , []);

  return (
    <div>
      {/* sad */}
      <div className="banner">
        <div className="logo-main"><img src="logo.png" alt="logo" /></div>
        <h1 className='Title'><FormattedMessage id="MusicalBands" /></h1>
      </div>
      <Container>
        <Row>
          <Col>
            <Bandas bands={bands} />
          </Col>
        </Row>
      </Container>
    <div>
      <p> <FormattedMessage id="MessageOldest" /> {oldest.name} <FormattedMessage id="with" /> {2022 - oldest.foundation_year} <FormattedMessage id="years" /></p>
    </div>
    </div>
  );
}

export default App;
