import macarrao from '../../assets/images/Macarrão.png'
import { BannerContainer, BannerContent, Darkness } from './styles'

const Banner = () => (
  <BannerContainer
    style={{
      backgroundImage: `url(${macarrao})`
    }}
  >
    <Darkness>
      <BannerContent className="container">
        <ul>
          <li>Italiana</li>
        </ul>
        <h1>La Dolce Vita Trattoria</h1>
      </BannerContent>
    </Darkness>
  </BannerContainer>
)

export default Banner
