import Tag from '../Tag'

import { PlateContainer } from './styles'

type Props = {
  image: string
  title: string
  description: string
  buttonFunction: () => void
}

const Plate = ({ image, title, description, buttonFunction }: Props) => (
  <PlateContainer>
    <img src={image} alt="pizza" />
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={buttonFunction}>
      <Tag invertColors="yes" size="big">
        Adicione ao carrinho
      </Tag>
    </button>
  </PlateContainer>
)

export default Plate
