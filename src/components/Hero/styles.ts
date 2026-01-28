import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const HeroContainer = styled.div`
  width: 100%;
  height: 384px;
  background-size: cover;
  padding-top: 64px;
  padding-bottom: 40px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 125px;
    width: 100%;
  }
`

export const Staff = styled.h1`
  margin-top: 138px;
  text-align: center;
  font-size: 36px;
  max-width: 539px;
  width: 100%;

  @media (max-width: ${breakpoint.desktop}) {
    margin-top: 112px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 96px;
    font-size: 32px;
  }
`
