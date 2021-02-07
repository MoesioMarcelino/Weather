import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Container,
  Header,
  Title,
  FormFilter,
  Select,
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

import submitImg from '../../assets/check.svg';
import clearFilterImg from '../../assets/clear.svg';
import emptyImg from '../../assets/empty.svg';

import sunnyImg from '../../assets/weather-icons/sunny.png';

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
interface IStateOption {
  label: string;
  value: string;
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
  const [states, setStates] = useState<IStateOption[]>([]);
  const [stateSelected, setStateSelected] = useState<IStateOption>();

  const [cities, setCities] = useState<IStateOption[]>([]);
  const [citySelected, setCitySelected] = useState<IStateOption>();

  const [weathers, setWeathers] = useState<IWeather[]>([]);

  useEffect(() => {
    const getStates = async () => {
      const { data: statesReturned } = await apiIBGE.get<IState[]>('');

      setStates(
        statesReturned.map((state) => ({
          label: state.nome,
          value: state.sigla,
        }))
      );
    };

    getStates();
  }, []);

  useEffect(() => {
    if (stateSelected) {
      const getCities = async () => {
        const { data: citiesReturned } = await apiIBGE.get<ICity[]>(
          `/${stateSelected.value}/municipios`
        );

        setCities(
          citiesReturned.map(({ nome }) => ({ label: nome, value: nome }))
        );
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
            q: citySelected?.value,
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
    setStateSelected(undefined);
    setCitySelected(undefined);
  }, []);

  const styles = useMemo(
    () => ({
      option: (
        styles: any,
        { data, isDisabled, isFocused, isSelected }: any
      ) => ({
        ...styles,
        backgroundColor: isFocused
          ? '#025159'
          : isSelected
          ? '#025159'
          : 'white',
        color: isFocused ? 'white' : isSelected ? 'white' : 'black',
        cursor: 'pointer',
        marginBottom: 2,
        borderRadius: 0,
      }),
    }),
    []
  );

  return (
    <Container>
      <Header>
        <Title>Weather App</Title>
        <FormFilter onSubmit={handleSubmit}>
          <Select
            options={states}
            placeholder="Busque um estado"
            onChange={(optionSelected: IStateOption) =>
              setStateSelected(optionSelected)
            }
            styles={styles}
            isClearable
          />
          <Select
            options={cities}
            placeholder="Busque uma cidade"
            onChange={(optionSelected: IStateOption) =>
              setCitySelected(optionSelected)
            }
            styles={styles}
            isClearable
          />
          <Actions>
            <ButtonSubmit
              type="submit"
              disabled={!citySelected || !stateSelected}
            >
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
