import Delivery from '../Delivery'
import OrderFinished from '../OrderFinished'
import OrdersList from '../OrdersList'
import Payment from '../Payments'

import { MenuContainer } from './styles'

import { useState } from 'react'

type Props = {
  closeMenuFunction: () => void
}

const LateralMenu = ({ closeMenuFunction }: Props) => {
  const [menuState, setMenuState] = useState(0)

  function next() {
    setMenuState(menuState + 1)
  }

  function back() {
    setMenuState(menuState - 1)
  }

  function move(num: number) {
    setMenuState(num)
  }

  if (menuState === 0) {
    return (
      <MenuContainer>
        <OrdersList next={next} />
      </MenuContainer>
    )
  } else if (menuState === 1) {
    return (
      <MenuContainer>
        <Delivery move={move} />
      </MenuContainer>
    )
  } else if (menuState === 2) {
    return (
      <MenuContainer>
        <Payment mover={move} />
      </MenuContainer>
    )
  } else {
    return (
      <MenuContainer>
        <OrderFinished closeMenuFunction={closeMenuFunction} />
      </MenuContainer>
    )
  }
}

export default LateralMenu
