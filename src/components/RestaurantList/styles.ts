import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 80px auto 120px;

  @media (max-width: ${breakpoint.desktop}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
      display: block;
    }
  }
`
