import React, { useEffect, useState } from 'react';

import { getIconName } from '../../utils/getIconName';

import {
  Container,
  Weather,
  Temperature,
  IconWeather,
  Additional,
  Status,
  Location,
  RemoveCard,
} from './styles';

interface Props {
  temperature: number;
  weather: string;
  cityName: string;
  state: string;
  country: string;
  removeCard(): void;
}

const Card: React.FC<Props> = ({
  temperature,
  weather,
  cityName,
  state,
  country,
  removeCard,
}) => {
  const [nameIcon, setNameIcon] = useState('');

  useEffect(() => {
    const iconNameGetted = getIconName(weather);

    setNameIcon(iconNameGetted || '01-s.png');
  }, [weather]);

  return (
    <>
      <Container>
        <Weather>
          <Temperature>{temperature}°C</Temperature>
          <IconWeather
            src={`https://developer.accuweather.com/sites/default/files/${nameIcon}`}
            alt={weather}
          />
        </Weather>

        <Additional>
          <Status>{weather}</Status>
          <Location>
            {cityName}, {state} - {country}
          </Location>
        </Additional>
        <RemoveCard onClick={removeCard}>X</RemoveCard>
      </Container>
    </>
  );
};

export default Card;
