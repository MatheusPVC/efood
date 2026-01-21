import macarrao from '../../assets/images/Macarrão.png'
import { Restaurante } from '../../pages/Home'
import { BannerContainer, BannerContent, Darkness } from './styles'

type Props = {
  restaurante: Restaurante
}
const Banner = ({ restaurante }: Props) => (
  <BannerContainer
    style={{
      backgroundImage: `url(${restaurante.capa})`
    }}
  >
    <Darkness>
      <BannerContent className="container">
        <ul>
          <li>{restaurante.tipo}</li>
        </ul>
        <h1>{restaurante.titulo}</h1>
      </BannerContent>
    </Darkness>
  </BannerContainer>
)

export default Banner
