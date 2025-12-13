import { HeroContainer, Container, Staff } from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${vector})` }}>
    <Container className="container">
      <img src={logo} alt="" />
      <Staff>Viva experiências gastronômicas no conforto da sua casa</Staff>
    </Container>
  </HeroContainer>
)

export default Hero
