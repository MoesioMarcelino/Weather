import React, { useCallback, useEffect, useState } from 'react';

import {
  Container,
  Header,
  Title,
  FormFilter,
  Select,
  InputContainer,
  Icon,
  Actions,
  IconContainer,
  ButtonSubmit,
  Content,
  Card,
  Weather,
  Temperature,
  IconWeather,
  Additional,
  Status,
  Location,
  Empty,
  EmptyImage,
  Description,
  Footer,
} from './styles';

import searchImg from '../../assets/search.svg';
import submitImg from '../../assets/check.svg';
import clearFilterImg from '../../assets/clear.svg';
import sunnyImg from '../../assets/sun.svg';
import emptyImg from '../../assets/empty.svg';

import apiWeather from '../../services/api-weather';
import apiIBGE from '../../services/api-ibge';

interface IState {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
  sigla: string;
}

interface ICity {
  id: number;
  nome: string;
}

interface ILocation {
  Key: string;
  AdministrativeArea: { EnglishName: string };
  Country: { EnglishName: string };
  EnglishName: string;
}

interface IWeather {
  id: number;
  WeatherText: string;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  cityName: string;
  state: string;
  country: string;
}

const Home: React.FC = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [stateSelected, setStateSelected] = useState('');

  const [cities, setCities] = useState<ICity[]>([]);
  const [citySelected, setCitySelected] = useState('');

  const [weathers, setWeathers] = useState<IWeather[]>([]);

  useEffect(() => {
    const getStates = async () => {
      const { data } = await apiIBGE.get<IState[]>('');

      setStates(data);
    };

    getStates();
  }, []);

  useEffect(() => {
    if (stateSelected) {
      const getCities = async () => {
        const { data } = await apiIBGE.get<ICity[]>(
          `/${stateSelected}/municipios`
        );

        setCities(data);
      };

      getCities();
    }
  }, [stateSelected]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { data } = await apiWeather.get<ILocation[]>(
        '/locations/v1/cities/search',
        {
          params: {
            q: citySelected,
          },
        }
      );

      if (data.length > 0) {
        const { Key, AdministrativeArea, EnglishName, Country } = data[0];
        const newCityID = Number(Key);
        const { data: city } = await apiWeather.get<IWeather[]>(
          `/currentconditions/v1/${newCityID}`
        );
        const { WeatherText, IsDayTime, Temperature } = city[0];

        const newWeather: IWeather = {
          id: newCityID,
          WeatherText,
          IsDayTime,
          Temperature: {
            Metric: {
              Value: Temperature.Metric.Value,
            },
          },
          cityName: EnglishName,
          state: AdministrativeArea.EnglishName,
          country: Country.EnglishName,
        };

        setWeathers([...weathers, newWeather]);
      }
    },
    [citySelected, weathers]
  );

  const handleClearFilter = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Weather App</Title>
        <FormFilter onSubmit={handleSubmit}>
          <InputContainer>
            <Icon src={searchImg} alt="Search" />
            <Select
              name="state"
              value={stateSelected || 'selected'}
              onChange={(e) => setStateSelected(e.target.value)}
            >
              <option disabled value="selected">
                Select a state
              </option>
              {states.map(({ id, nome, sigla }) => (
                <option key={id} value={sigla}>
                  {nome}
                </option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <Icon src={searchImg} alt="Search" />
            <Select
              name="city"
              value={citySelected || 'selected'}
              onChange={(e) => setCitySelected(e.target.value)}
            >
              <option disabled value="selected">
                Select a city
              </option>
              {cities.map(({ id, nome }) => (
                <option key={id} value={nome}>
                  {nome}
                </option>
              ))}
            </Select>
          </InputContainer>
          <Actions>
            <ButtonSubmit type="submit" disabled={!citySelected}>
              <Icon src={submitImg} alt="Submit" />
            </ButtonSubmit>
            <IconContainer onClick={handleClearFilter}>
              <Icon src={clearFilterImg} alt="Submit" />
            </IconContainer>
          </Actions>
        </FormFilter>
      </Header>
      <Content>
        {weathers.length > 0 ? (
          weathers.map(
            ({
              id,
              Temperature: degrees,
              WeatherText,
              cityName,
              state,
              country,
            }) => (
              <Card key={id}>
                <Weather>
                  <Temperature>{degrees.Metric.Value}°C</Temperature>
                  <IconWeather src={sunnyImg} alt={WeatherText} />
                </Weather>

                <Additional>
                  <Status>{WeatherText}</Status>
                  <Location>
                    {cityName}, {state} - {country}
                  </Location>
                </Additional>
              </Card>
            )
          )
        ) : (
          <Empty>
            <Description>Select a city to see its weather</Description>
            <EmptyImage src={emptyImg} alt="Empty Image" />
          </Empty>
        )}
      </Content>
      <Footer>Weather App</Footer>
    </Container>
  );
};

export default Home;
