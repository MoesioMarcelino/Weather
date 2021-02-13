import styled, { css } from 'styled-components';
import SelectComponent from 'react-select';

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

  @media only screen and (max-width: 425px) {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  /* font-size: 38px; */

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

export const Select = styled(SelectComponent)`
  width: 100%;
  margin-right: 15px;
  font-size: 16px;
  background-color: transparent;

  div {
    border-radius: 10px;
    /* height: 38px; */
  }

  ${(props) =>
    props.primary &&
    css`
      background: black;
      color: black;
    `}

  @media only screen and (max-width: 1000px) {
    margin-right: 0;
    margin-bottom: 10px;
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
  /* height: 38px; */
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
  /* height: 38px; */
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
  /* height: 38px; */
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

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const EmptyImage = styled.img`
  width: 50%;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const Description = styled.span`
  text-align: center;
  color: #025159;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  padding: 0px 15px 0 35px;

  height: 60vh;
  max-height: 60vh;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
`;

export const Footer = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  color: #025159;
`;
