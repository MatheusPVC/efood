import Tag from '../Tag'
import { FinishedContainer, NextButton } from './styles'

type Props = {
  closeMenuFunction: () => void
}

const OrderFinished = ({ closeMenuFunction }: Props) => (
  <FinishedContainer>
    <h3>Pedido realizado - ORDER_ID</h3>
    <p>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
      <br />
      <br /> Gostaríamos de ressaltar que nossos entregadores não estão
      autorizados a realizar cobranças extras. <br />
      <br /> Lembre-se da importância de higienizar as mãos após o recebimento
      do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      <br />
      <br /> Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </p>
    <NextButton onClick={closeMenuFunction}>
      <Tag size="big" invertColors="yes">
        Finalizar
      </Tag>
    </NextButton>
  </FinishedContainer>
)

export default OrderFinished
