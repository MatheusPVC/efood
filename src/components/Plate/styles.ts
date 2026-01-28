import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoint, cores } from '../../styles'

export const PlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  max-height: 338px;
  max-width: 320px;
  height: 100%;
  width: 100%;
  background-color: ${cores.rosa};
  color: ${cores.bege};

  img {
    height: 167px;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
    padding-top: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 8px 0;
    max-height: 104px;
    height: 100%;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  ${TagContainer} {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 260px;
    width: 100%;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
