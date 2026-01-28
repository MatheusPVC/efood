import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'
import { NavBarContainer, NavItens } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/Cart'

const NavBar = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openLateralMenu = () => {
    dispatch(open())
  }

  return (
    <NavBarContainer style={{ backgroundImage: `url(${vector})` }}>
      <NavItens className="container">
        <Link to={'/'}>Restaurantes</Link>
        <img src={logo} alt="logo" />
        <a onClick={openLateralMenu}>{items.length} produto(s) no carrinho</a>
      </NavItens>
    </NavBarContainer>
  )
}

export default NavBar
