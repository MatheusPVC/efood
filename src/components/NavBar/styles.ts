import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const NavBarContainer = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  padding-top: 64px;
  padding-bottom: 64px;
  font-weight: bold;
  font-size: 18px;
  a {
    text-decoration: none;
    color: ${cores.rosa};
    cursor: pointer;
  }
`

export const NavItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`
