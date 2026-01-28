import Delivery from '../Delivery'
import OrderFinished from '../OrderFinished'
import OrdersList from '../OrdersList'
import Payment from '../Payments'

import { MenuContainer, Overlay, MenuContent } from './styles'

import { useState } from 'react'

import { close } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const LateralMenu = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(close())
    setMenuState(0)
  }

  const [menuState, setMenuState] = useState(0)

  function next() {
    setMenuState(menuState + 1)
  }

  function move(num: number) {
    setMenuState(num)
  }

  if (menuState === 0) {
    return (
      <MenuContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeMenu} />
        <MenuContent>
          <OrdersList next={next} />
        </MenuContent>
      </MenuContainer>
    )
  } else if (menuState === 1) {
    return (
      <MenuContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeMenu} />
        <MenuContent>
          <Delivery move={move} />
        </MenuContent>
      </MenuContainer>
    )
  } else if (menuState === 2) {
    return (
      <MenuContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeMenu} />
        <MenuContent>
          <Payment mover={move} />
        </MenuContent>
      </MenuContainer>
    )
  } else {
    return (
      <MenuContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeMenu} />
        <MenuContent>
          <OrderFinished closeMenuFunction={closeMenu} />
        </MenuContent>
      </MenuContainer>
    )
  }
}

export default LateralMenu
