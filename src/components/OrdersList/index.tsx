import {
  NextButton,
  OrderContainer,
  OrderInfo,
  OrdersListContainer,
  TotalValue,
  TrashButton
} from './styles'

import pizza from '../../assets/images/Pizza.png'
import lixeira from '../../assets/images/lixeira.png'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'
import { Prato } from '../../pages/Home'

type Props = {
  next: () => void
}

const OrdersList = ({ next }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((total, valorAtual) => {
      return (total += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      <OrdersListContainer>
        {items.map((item) => (
          <OrderContainer key={item.id}>
            <img src={item.foto} />
            <OrderInfo>
              <h3>{item.nome}</h3>
              <span>R$ {item.preco.toFixed(2)}</span>
            </OrderInfo>
            <TrashButton onClick={() => removeItem(item.id)}>
              <img src={lixeira} alt="lixeira" />
            </TrashButton>
          </OrderContainer>
        ))}
      </OrdersListContainer>
      <TotalValue>
        <p>Valor</p>
        <span>R$ {getTotalPrice().toFixed(2)}</span>
      </TotalValue>
      <NextButton onClick={next}>
        <Tag size="big" invertColors="yes">
          Continuar com a entrega
        </Tag>
      </NextButton>
    </>
  )
}

export default OrdersList
