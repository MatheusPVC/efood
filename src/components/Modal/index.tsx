import Tag from '../Tag'
import pizza from '../../assets/images/Pizza.png'
import close from '../../assets/images/close.png'
import { CloseButton, InfoContainer, ModalContainer } from './styles'

type Props = {
  image: string
  title: string
  description: string
  serve: string
  price: number
  closeFunction: () => void
}

const ModalBox = ({
  closeFunction,
  description,
  image,
  title,
  serve,
  price
}: Props) => (
  <ModalContainer className="container">
    <CloseButton onClick={closeFunction}>
      <img src={close} />
    </CloseButton>
    <img src={image} alt={title} />
    <InfoContainer>
      <h3>{title}</h3>
      <p>
        {description}
        <br />
        <br /> Serve: {serve}
      </p>
      <button>
        <Tag invertColors="yes" size="big">
          Adicionar ao carrinho - R$ {price.toFixed(2)}
        </Tag>
      </button>
    </InfoContainer>
  </ModalContainer>
)

export default ModalBox
