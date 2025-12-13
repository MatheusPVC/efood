import styled from 'styled-components'
import { cores } from '../../styles'

export const MenuContainer = styled.div`
  height: 100vh;
  width: 360px;
  background-color: ${cores.rosa};
  color: ${cores.bege};
  padding: 32px 8px 8px;
`

export const OrderContainer = styled.li`
  width: 100%;
  height: 100px;
  padding: 8px;
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  position: relative;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
`

export const OrdersList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  margin-bottom: 40px;
`

export const TrashButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  background-color: transparent;
  cursor: pointer;
  img {
    height: 16px;
    width: 16px;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  h3 {
    size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  span {
    font-size: 14px;
  }
`

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 16px;
`

export const NextButton = styled.button`
  width: 100%;
`
