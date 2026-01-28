import Tag from '../Tag'
import close from '../../assets/images/close.png'
import { CloseButton, InfoContainer, ModalContainer } from './styles'
import { Prato } from '../../pages/Home'

import { add } from '../../store/reducers/Cart'
import { useDispatch } from 'react-redux'

type Props = {
  prato: Prato
  closeFunction: () => void
}

const ModalBox = ({ closeFunction, prato }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    closeFunction()
  }

  return (
    <ModalContainer className="container">
      <CloseButton onClick={closeFunction}>
        <img src={close} />
      </CloseButton>
      <img src={prato.foto} alt={prato.nome} />
      <InfoContainer>
        <h3>{prato.nome}</h3>
        <p>
          {prato.descricao}
          <br />
          <br /> Serve: {prato.porcao}
        </p>
        <button onClick={addToCart}>
          <Tag invertColors="yes" size="big">
            Adicionar ao carrinho - R$ {prato.preco.toFixed(2)}
          </Tag>
        </button>
      </InfoContainer>
    </ModalContainer>
  )
}

export default ModalBox
