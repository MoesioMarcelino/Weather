import React from 'react';

import {
  Container,
  Header,
  Title,
  Filter,
  InputContainer,
  Icon,
  Input,
  Actions,
  IconContainer,
  Content,
  Card,
  Weather,
  Temperature,
  IconWeather,
  Additional,
  Status,
  Location,
  Footer,
} from './styles';

import searchImg from '../../assets/search.svg';
import submitImg from '../../assets/check.svg';
import clearFilterImg from '../../assets/clear.svg';
import sunnyImg from '../../assets/sun.svg';

// import api from '../../services/api';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Weather App</Title>
        <Filter>
          <InputContainer>
            <Icon src={searchImg} alt="Search" />
            <Input type="text" placeholder="Type a city name here" />
          </InputContainer>
          <Actions>
            <IconContainer>
              <Icon src={submitImg} alt="Submit" />
            </IconContainer>
            <IconContainer>
              <Icon src={clearFilterImg} alt="Submit" />
            </IconContainer>
          </Actions>
        </Filter>
      </Header>
      <Content>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
          <Card key={count}>
            <Weather>
              <Temperature>29°C</Temperature>
              <IconWeather src={sunnyImg} alt="Sunny day" />
            </Weather>

            <Additional>
              <Status>Sunny</Status>
              <Location>Juazeiro do Norte, Ceará - Brazil</Location>
            </Additional>
          </Card>
        ))}
      </Content>
      <Footer>Weather App</Footer>
    </Container>
  );
};

export default Home;
