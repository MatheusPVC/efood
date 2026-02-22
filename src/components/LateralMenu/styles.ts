import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

type InputSeparatorCustom = {
  firstInput?: string
  secondInput?: string
}

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
//Apartir daqui é do form

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

// export const Input = styled.input`
//   height: 32px;
//   width: 100%;
//   font-size: 14px;
//   font-weight: bold;
//   border: 1px solid ${cores.branca};

//   &.hasError {
//     border: 2px solid red;
//   }
// `

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 32px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid ${cores.branca};

    &.hasError {
      border: 2px solid red;
    }
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  margin-bottom: 24px;

  &.exception {
    margin-bottom: 0px;
  }
`

export const InputSeparator = styled.div<InputSeparatorCustom>`
  display: grid;
  grid-template-columns: ${({ firstInput = '1' }: InputSeparatorCustom) =>
      firstInput + 'fr'} ${({ secondInput = '1' }: InputSeparatorCustom) =>
      secondInput + 'fr'};
  column-gap: 30px;
`

export const NextButton = styled.button`
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;

  ${TagContainer} {
    width: 100%;
  }
`

//Apartir daqui é a lista de pedidos

export const OrderContainer = styled.li`
  width: 100%;
  height: 100px;
  padding: 8px;
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  position: relative;
  img {
    max-height: 84px;
    max-width: 84px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const OrdersListContainer = styled.ul`
  display: grid;
  max-height: 432px;
  overflow-y: auto;
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

export const Message = styled.p`
  text-align: center;
  font-weight: bold;
`

//Apartir daqui é a mensagem final

export const FinishedContainer = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`
