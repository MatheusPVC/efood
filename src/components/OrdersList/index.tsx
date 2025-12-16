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

type Props = {
  next: () => void
}

const OrdersList = ({ next }: Props) => (
  <>
    <OrdersListContainer>
      <OrderContainer>
        <img src={pizza} />
        <OrderInfo>
          <h3>Pizza Marguerita</h3>
          <span>R$ 60,90</span>
        </OrderInfo>
        <TrashButton>
          <img src={lixeira} alt="lixeira" />
        </TrashButton>
      </OrderContainer>
      <OrderContainer>
        <img src={pizza} />
        <OrderInfo>
          <h3>Pizza Marguerita</h3>
          <span>R$ 60,90</span>
        </OrderInfo>
        <TrashButton>
          <img src={lixeira} alt="lixeira" />
        </TrashButton>
      </OrderContainer>
      <OrderContainer>
        <img src={pizza} />
        <OrderInfo>
          <h3>Pizza Marguerita</h3>
          <span>R$ 60,90</span>
        </OrderInfo>
        <TrashButton>
          <img src={lixeira} alt="lixeira" />
        </TrashButton>
      </OrderContainer>
    </OrdersListContainer>
    <TotalValue>
      <p>Valor</p>
      <span>R$ 182,70</span>
    </TotalValue>
    <NextButton onClick={next}>
      <Tag size="big" invertColors="yes">
        Continuar com a entrega
      </Tag>
    </NextButton>
  </>
)

export default OrdersList
