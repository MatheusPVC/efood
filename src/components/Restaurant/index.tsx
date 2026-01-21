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
  destacado: boolean
  tipo: string
  id: number
}

const Restaurant = ({
  name,
  description,
  stars,
  image,
  destacado,
  tipo,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 197) + '...'
    }
    return descricao
  }

  return (
    <RestaurantContainer>
      <TagList>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
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
        <p>{getDescricao(description)}</p>
        <CustomLink to={`/perfil/${id}`}>
          <Tag size="big">Saiba mais</Tag>
        </CustomLink>
      </InfoContainer>
    </RestaurantContainer>
  )
}

export default Restaurant
