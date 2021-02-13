import styled from 'styled-components';

export const Container = styled.div`
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

  position: relative;

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
    /* font-size: 38px; */
  }
`;

export const IconWeather = styled.img`
  height: 75px;
  width: 120px;
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

export const RemoveCard = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  padding: 1px 8px;
  border-radius: 50%;
  border: 3px solid #04525a;
  cursor: pointer;
`;
