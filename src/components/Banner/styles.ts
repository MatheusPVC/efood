import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  max-height: 280px;
  height: 280px;
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: cover;
  color: ${cores.branca};
  position: relative;
`

export const Darkness = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
`

export const BannerContent = styled.div`
  display: block;
  padding: 24px 0 32px;
  li {
    font-weight: 100;
    font-size: 32px;
  }

  h1 {
    margin-top: 156px;
    font-size: 32px;
    font-weight: 900;
  }
`
