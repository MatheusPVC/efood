import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const ModalContainer = styled.div`
  padding: 32px;
  display: flex;
  max-height: 344px;
  height: 100%;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    max-height: 480px;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 280px;
    max-width: 280px;
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${breakpoint.tablet}) {
    }
  }
`

export const InfoContainer = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoint.tablet}) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
    h3 {
      margin-top: 8px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin: 16px 0;
    line-height: 22px;
    max-height: 198px;
    height: 100%;
    font-size: 14px;
    @media (max-width: ${breakpoint.tablet}) {
      overflow: auto;
      max-height: 180px;
    }
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
