import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faEye } from "@fortawesome/free-solid-svg-icons";

const panel = {
  width: '20%',
  maxWidth: '400px',
  position: 'absolute',
  padding: '10px 26px 3px',
  left: 0,
  background: 'rgba(33,33,33,.5)',
  color: '#fff',
  backgroundColor: 'black',
  zIndex: 1,
  opacity: 0.5,
  top: 0
}

const eyeIcon = {
  position: 'absolute',
  left: 0,
  zIndex: 2,
  opacity: 0.5,
  top: 0
}

const h1 = {
  textAlign: 'center',
  fontSize: '2rem',
  fontFamily: "Cookie",
  padding: '20px',
  margin: '15px',
  zIndex: 1,
  opacity: 0.7
}

const cityBox = {
  padding: '1% 2%',
  left: 0,
  bottom: 0,
  height: '170px',
  background: 'rgba(33,33,33,.6)',
  borderRadius: '3px',
  overflowY: 'auto',
}

const citySelectorStyle = {
  background: cityBox.background,
  width: '100%',
  color: 'white',
  border: 0,
  textAlign: 'initial',
  fontWeight: 400,
  fontSize: '14px',
};


function Player(props) {
  const [selectedCountry, setCountry] = useState('');
  const [playerActive, setPlayerActive] = useState(true);

  const onMouseOver = event => {
    const el = event.target;
    el.style.fontWeight = 700;
    el.style.fontSize = '14px';
  };

  const onMouseOut = event => {
    const el = event.target;
    el.style.fontWeight = 400;
    el.style.fontSize = '14px';
  };

  const countrySelector = props.allCities.map((country) => (
    <button 
      key={country.country}
      style={citySelectorStyle} 
      onClick={() => setCountry(country.country)}
      onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>
      {country.country}
    </button>
  ));

  let citySelector;
  if(selectedCountry !== ''){
    citySelector = props.allCities.find((country) => country.country === selectedCountry).cities.map((city) => (
      <button 
        key={city.videoId}
        style={citySelectorStyle} 
        onClick={() => props.changeVideo(city)}
        onMouseEnter={event => onMouseOver(event)}
        onMouseOut={event => onMouseOut(event)}>
        {city.name}
      </button>
    ));

  }

  const onIconClick = () => {
    setPlayerActive(!playerActive);
  }

  return (
    <div>
      <FontAwesomeIcon icon={faEye} style={eyeIcon} onClick={onIconClick}/>
      {playerActive && (
        <div style={panel}>
          <h1 style={h1}>City Walk</h1>
          <p>Aperte F11 para uma melhor experiência!</p>
          <label>Escolha uma país para caminhar</label>
          <div style={cityBox}>
            {countrySelector}
          </div>
          {selectedCountry !== '' && (
            <div>
              <label>Escolha uma cidade para caminhar</label>
              {citySelector}
            </div>
          )}
          <a href={props.source} target="_blank" rel="noopener noreferrer">Fonte</a>
          <p>Me ajude a comprar pizza <FontAwesomeIcon icon={faPizzaSlice}/></p>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="LTM5QNLL4WA52" />
            <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Faça doações com o botão do PayPal" />
            <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      )}
    </div>
  );
}

export default Player;
