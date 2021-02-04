import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background-color: #025159;
  height: 35vh;
  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 50px;

  border-bottom: 10px solid #fff;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;

  @media only screen and (max-width: 450px) {
    font-size: 35px;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  background: rgb(255 255 255);
  height: 40px;
  padding: 0 15px 0 10px;
  border-radius: 10px;
  width: 100%;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 550px) {
    margin: 10px 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-left: 10px;

  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const IconContainer = styled.div`
  padding: 5px;
  background-color: #fff;
  height: 40px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  & + div {
    margin-left: 10px;
  }

  @media only screen and (max-width: 550px) {
    flex: 1;
  }
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  color: #025159;
  font-size: 16px;
  margin-left: 15px;

  &::placeholder {
    color: #025159;
  }
`;

export const Content = styled.div`
  padding: 0px 15px 0 35px;

  height: 60vh;
  max-height: 60vh;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: fit-content;

  flex: 1;

  min-width: 350px;

  background: rgb(22, 95, 102);
  background: linear-gradient(
    60deg,
    rgba(22, 95, 102, 1) 17%,
    rgba(2, 81, 89, 1) 77%
  );

  box-shadow: 3px 2px 5px 1px rgb(0, 0, 0, 0.3);

  border-radius: 10px;

  margin-top: 20px;
  margin-right: 20px;
`;

export const Weather = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Temperature = styled.h1`
  font-size: 50px;
  color: #fff;
`;

export const IconWeather = styled.img`
  height: 68px;
  width: 68px;
`;

export const Additional = styled.div`
  width: 100%;
`;

export const Status = styled.h3`
  color: #fff;
  margin-top: 20px;
`;

export const Location = styled.h4`
  color: #fff;
  margin-top: 10px;
`;

export const Footer = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
`;
