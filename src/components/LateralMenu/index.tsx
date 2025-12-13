import Tag from '../Tag'
import {
  MenuContainer,
  NextButton,
  OrderContainer,
  OrderInfo,
  OrdersList,
  TotalValue,
  TrashButton
} from './styles'

import pizza from '../../assets/images/Pizza.png'
import lixeira from '../../assets/images/lixeira.png'

const LateralMenu = () => (
  <MenuContainer>
    <OrdersList>
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
    </OrdersList>
    <TotalValue>
      <p>Valor</p>
      <span>R$ 182,70</span>
    </TotalValue>
    <NextButton>
      <Tag size="big" invertColors="yes">
        Continuar com a entrega
      </Tag>
    </NextButton>
  </MenuContainer>
)

export default LateralMenu
