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
  justify-content: space-around;

  padding: 50px;

  margin-bottom: 10px;

  @media only screen and (max-width: 425px) {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;

  @media only screen and (max-width: 450px) {
    font-size: 35px;
  }
`;

export const FormFilter = styled.form`
  display: flex;
  align-items: center;
  width: 70%;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 0;
  margin-left: 15px;
  font-size: 16px;
  outline: 0;
  background-color: transparent;
`;

export const InputContainer = styled.div`
  background: rgb(255, 255, 255);
  height: 40px;
  padding: 0 15px 0 10px;
  border-radius: 10px;
  width: 100%;
  margin-right: 10px;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    margin: 0 0 10px;
  }
`;

export const Actions = styled.div`
  display: flex;

  @media only screen and (max-width: 1000px) {
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

  margin-left: 10px;

  &:hover {
    opacity: 0.7;
  }

  /* & + div {
    margin-left: 10px;
  } */

  @media only screen and (max-width: 1000px) {
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

export const ButtonSubmit = styled.button`
  border: 0;
  padding: 5px;
  background-color: #fff;
  height: 40px;
  border-radius: 10px;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  justify-content: center;
  align-items: center;

  /* cursor: pointer; */
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 1000px) {
    flex: 1;
  }
`;

export const Empty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #025159;
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

  @media only screen and (max-width: 425px) {
    min-width: fit-content;
    padding: 20px;
  }
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

  @media only screen and (max-width: 425px) {
    font-size: 40px;
  }
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
  color: #025159;
`;
