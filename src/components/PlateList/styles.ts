import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const PlateListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
  column-gap: 32px;
  margin: 56px auto 120px;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr;

    li {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;

    li {
      max-width: 100%;
      width: 100%;
    }
  }
`
