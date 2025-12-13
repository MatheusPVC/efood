import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const PlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 338px;
  width: 320px;
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
`
