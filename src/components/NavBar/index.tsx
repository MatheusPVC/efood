import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'
import { NavBarContainer, NavItens } from './styles'

type Props = {
  lateralMenuFunction: () => void
}

const NavBar = ({ lateralMenuFunction }: Props) => (
  <NavBarContainer style={{ backgroundImage: `url(${vector})` }}>
    <NavItens className="container">
      <Link to={'/'}>Restaurantes</Link>
      <img src={logo} alt="logo" />
      <a onClick={lateralMenuFunction}> 0 produto(s) no carrinho</a>
    </NavItens>
  </NavBarContainer>
)

export default NavBar
