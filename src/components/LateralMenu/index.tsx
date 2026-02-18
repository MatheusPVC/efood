import * as S from './styles'

import { close, setCartState, remove } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tag from '../Tag'

import lixeira from '../../assets/images/lixeira.png'

const LateralMenu = () => {
  const { isOpen, cartState, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(close())
  }

  const changePage = (n: number) => {
    dispatch(setCartState(n))
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((total, valorAtual) => {
      return (total += valorAtual.preco)
    }, 0)
  }

  if (cartState === 0) {
    return (
      <S.MenuContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeMenu} />
        <S.MenuContent>
          <>
            {items.length > 0 ? (
              <>
                <S.OrdersListContainer>
                  {items.map((item) => (
                    <S.OrderContainer key={item.id}>
                      <img src={item.foto} />
                      <S.OrderInfo>
                        <h3>{item.nome}</h3>
                        <span>R$ {item.preco.toFixed(2)}</span>
                      </S.OrderInfo>
                      <S.TrashButton onClick={() => removeItem(item.id)}>
                        <img src={lixeira} alt="lixeira" />
                      </S.TrashButton>
                    </S.OrderContainer>
                  ))}
                </S.OrdersListContainer>
                <S.TotalValue>
                  <p>Valor</p>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </S.TotalValue>
                <S.NextButton onClick={() => changePage(1)}>
                  <Tag size="big" invertColors="yes">
                    Continuar com a entrega
                  </Tag>
                </S.NextButton>
              </>
            ) : (
              <S.Message>O carrinho está vazio!</S.Message>
            )}
          </>
        </S.MenuContent>
      </S.MenuContainer>
    )
  } else if (cartState < 3) {
    return (
      <S.MenuContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeMenu} />
        <S.MenuContent>
          <form>
            {cartState === 1 ? (
              <S.FormContainer>
                <h3>Entrega</h3>
                <S.GridContainer>
                  <S.InputContainer>
                    <S.Label htmlFor="nome">Quem irá receber?</S.Label>
                    <S.Input type="text" id="nome" />
                  </S.InputContainer>
                  <S.InputContainer>
                    <S.Label htmlFor="address">Endereço</S.Label>
                    <S.Input type="text" id="address" />
                  </S.InputContainer>
                  <S.InputContainer>
                    <S.Label htmlFor="city">Cidade</S.Label>
                    <S.Input type="text" id="city" />
                  </S.InputContainer>
                  <S.InputSeparator>
                    <S.InputContainer>
                      <S.Label htmlFor="cep">CEP</S.Label>
                      <S.Input type="text" id="cep" />
                    </S.InputContainer>
                    <S.InputContainer>
                      <S.Label htmlFor="phone">Número</S.Label>
                      <S.Input type="text" id="phone" />
                    </S.InputContainer>
                  </S.InputSeparator>
                  <S.InputContainer>
                    <S.Label htmlFor="complement">
                      Complemento (opcional)
                    </S.Label>
                    <S.Input type="text" id="complement" />
                  </S.InputContainer>
                </S.GridContainer>
                <S.NextButton type="button" onClick={() => changePage(2)}>
                  <Tag size="big" invertColors="yes">
                    Continuar com o pagamento
                  </Tag>
                </S.NextButton>
                <S.NextButton type="button" onClick={() => changePage(0)}>
                  <Tag size="big" invertColors="yes">
                    Voltar para o carrinho
                  </Tag>
                </S.NextButton>
              </S.FormContainer>
            ) : (
              <S.FormContainer>
                <h3>
                  Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}
                </h3>
                <S.GridContainer className="exception">
                  <S.InputContainer>
                    <S.Label htmlFor="nome-cartao">Nome no cartão</S.Label>
                    <S.Input type="text" id="nome-cartao" />
                  </S.InputContainer>
                  <S.InputSeparator firstInput="2" secondInput="1">
                    <S.InputContainer id="numero-cartao-container">
                      <S.Label htmlFor="numero-cartao">
                        Número do cartão
                      </S.Label>
                      <S.Input type="text" id="numero-cartao" />
                    </S.InputContainer>
                    <S.InputContainer>
                      <S.Label htmlFor="nome">CVV</S.Label>
                      <S.Input type="text" id="cvv" />
                    </S.InputContainer>
                  </S.InputSeparator>
                  <S.InputSeparator>
                    <S.InputContainer>
                      <S.Label htmlFor="mes-vencimento">
                        Mês do vencimento
                      </S.Label>
                      <S.Input type="text" id="mes-vencimento" />
                    </S.InputContainer>
                    <S.InputContainer>
                      <S.Label htmlFor="ano-vencimento">
                        Ano do vencimento
                      </S.Label>
                      <S.Input type="text" id="ano-vencimento" />
                    </S.InputContainer>
                  </S.InputSeparator>
                </S.GridContainer>
              </S.FormContainer>
            )}
            {cartState === 2 ? (
              <>
                <S.NextButton type="submit" onClick={() => changePage(3)}>
                  <Tag size="big" invertColors="yes">
                    Finalizar pagamento
                  </Tag>
                </S.NextButton>
                <S.NextButton type="button" onClick={() => changePage(1)}>
                  <Tag size="big" invertColors="yes">
                    Voltar para a edição de endereço
                  </Tag>
                </S.NextButton>
              </>
            ) : (
              ''
            )}
          </form>
        </S.MenuContent>
      </S.MenuContainer>
    )
  } else {
    return (
      <S.MenuContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeMenu} />
        <S.MenuContent>
          <S.FinishedContainer>
            <h3>Pedido realizado - ORDER_ID</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br /> Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br />
              <br /> Lembre-se da importância de higienizar as mãos após o
              recebimento do pedido, garantindo assim sua segurança e bem-estar
              durante a refeição.
              <br />
              <br /> Esperamos que desfrute de uma deliciosa e agradável
              experiência gastronômica. Bom apetite!
            </p>
            <S.NextButton onClick={closeMenu}>
              <Tag size="big" invertColors="yes">
                Finalizar
              </Tag>
            </S.NextButton>
          </S.FinishedContainer>
        </S.MenuContent>
      </S.MenuContainer>
    )
  }
}

export default LateralMenu
