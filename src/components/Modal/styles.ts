import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  padding: 32px;
  display: flex;
  height: 344px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  position: relative;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin: 16px 0;
    line-height: 22px;
    max-height: 198px;
    font-size: 14px;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background-color: transparent;
  border: none;
  height: 16px;
  width: 16px;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
    object-fit: contain;
  }
`
