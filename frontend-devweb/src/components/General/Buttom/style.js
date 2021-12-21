import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 600;
  height: 44px;
  background: #6904A7;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  // TODO: Adicionar sombra
  :hover {
    background-color: #6904A7;
    // TODO: Adicionar sombra
  }
`;