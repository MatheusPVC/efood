import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag/index'
import {
  RestaurantContainer,
  InfoContainer,
  ImageContainer,
  TagList,
  InfoHeader,
  CustomLink
} from './styles'

type Props = {
  name: string
  description: string
  stars: number
  image: string
  infos: string[]
}

const Restaurant = ({ name, description, stars, image, infos }: Props) => (
  <RestaurantContainer>
    <TagList>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagList>
    <ImageContainer style={{ backgroundImage: `url(${image})` }} />
    <InfoContainer>
      <InfoHeader>
        <h2>{name}</h2>
        <div>
          <span>{stars}</span>
          <img src={estrela} alt="estrela" />
        </div>
      </InfoHeader>
      <p>{description}</p>
      <CustomLink to={'/perfil'}>
        <Tag size="big">Saiba mais</Tag>
      </CustomLink>
    </InfoContainer>
  </RestaurantContainer>
)

export default Restaurant
