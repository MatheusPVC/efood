import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/Facebook.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'
import twitter from '../../assets/images/Twitter.svg'

import { FooterContainer, ContactList, Text, FooterItens } from './styles'
const Footer = () => (
  <FooterContainer>
    <FooterItens className="container">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ContactList>
        <button>
          <img src={instagram} alt="instagram" />
        </button>
        <button>
          <img src={facebook} alt="facebook" />
        </button>
        <button>
          <img src={twitter} alt="twitter" />
        </button>
      </ContactList>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </FooterItens>
  </FooterContainer>
)

export default Footer
