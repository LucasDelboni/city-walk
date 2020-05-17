import React, { useState } from 'react';
import Player from './Player';

const videoStyle= {
  width: "100%", 
  height: "100%",
  pointerEvents: 'none',
  position: 'absolute'
};

const section = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}

const videoContainer = {
  position: 'absolute',
  width: '300%',
  height: '115%',
  left: '-100%',
  top: '-7%',
}

function App() {
  const allCities = [
    {country: 'Brasil', cities: [
      {name: 'Curitiba - Paraná', videoId: '1w5eAshOono'},
      {name: 'São Paulo (Av Paulista) - São Paulo', videoId: 'UFP3YLjaCXk', customCommand: '&start=23'},
      {name: 'São Paulo (Ibirapuera) - São Paulo', videoId: 'FJaE8lg_l7w', customCommand: '&start=10'},
      {name: 'São Paulo (Oscar Freire) - São Paulo', videoId: 'yPSVCVFgZng', customCommand: '&start=10'},
      {name: 'São Paulo (Itaim BIbi) - São Paulo', videoId: 'zQQZsmdVouE', customCommand: '&start=10'},
      {name: 'Aparecida - São Paulo', videoId: 'UkiVENO6btk', customCommand: '&start=8'},
      {name: 'Rio de Janeiro - Rio de Janeiro', videoId: 'zOVFrYL3F8o', customCommand: '&start=23'},
      {name: 'Paraty - Rio de Janeiro', videoId: '712S2ureJG4', customCommand: '&start=10'},
      {name: 'Gramado - Rio Grande do Sul', videoId: '56zbMbin1h4', customCommand: '&start=10'}
    ]},
    {country: 'Mexico', cities: [
      {name: 'Cidade do Mexico', videoId: 'ER_szwLxHYk', customCommand: '&start=19'},
    ]},
    {country: 'Uruguai', cities: [
      {name: 'Punta del Este', videoId: 'hjSc_zaO6CY', customCommand: '&start=20'},
    ]},
    {country: 'Argentina', cities: [
      {name: 'Buenos Aires', videoId: 'oTaxO9HnEL0', customCommand: '&start=14'},
    ]},
  ];

  const randomElement = allCities[0].cities[Math.floor(Math.random() * allCities[0].cities.length)];
  const [currentCity, changeVideo] = useState(randomElement);

  const videoSource = `https://www.youtube.com/embed/${currentCity.videoId}?
    loop=1&&autoplay=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1&modestbranding=1&controls=0&disablekb=1&fs=0
    &iv_load_policy=3&hd=1&${currentCity.customCommand}`;
  const source = `https://www.youtube.com/watch?v=${currentCity.videoId}`;

  return (
    <div>
      <div style={section}>
        <Player allCities={allCities} changeVideo={changeVideo} source={source}/>
        <div style={videoContainer}>
          <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={videoStyle} src={videoSource} disablekb="1" title="video">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
