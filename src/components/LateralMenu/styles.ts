import styled from 'styled-components'
import { cores } from '../../styles'

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const MenuContent = styled.div`
  height: 100vh;
  width: 360px;
  background-color: ${cores.rosa};
  color: ${cores.bege};
  padding: 32px 8px 8px;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
`
