import Tag from '../Tag'
import pizza from '../../assets/images/Pizza.png'
import close from '../../assets/images/close.png'
import { CloseButton, InfoContainer, ModalContainer } from './styles'

type Props = {
  closeFunction: () => void
}

const ModalBox = ({ closeFunction }: Props) => (
  <ModalContainer className="container">
    <CloseButton onClick={closeFunction}>
      <img src={close} />
    </CloseButton>
    <img src={pizza} alt="pizza" />
    <InfoContainer>
      <h3>Pizza Marguerida</h3>
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião.
        <br />
        <br /> Serve: de 2 a 3 pessoas
      </p>
      <button>
        <Tag invertColors="yes" size="big">
          Adicionar ao carrinho - R$ 60,90
        </Tag>
      </button>
    </InfoContainer>
  </ModalContainer>
)

export default ModalBox
