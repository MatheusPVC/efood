import * as S from './styles'
import { useFormik } from 'formik'
import { close, setCartState, remove, clear } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useEffect } from 'react'
import InputMask from 'react-input-mask'

import Tag from '../Tag'

import lixeira from '../../assets/images/lixeira.png'

const LateralMenu = () => {
  const [purchase, { isSuccess, data, reset, isLoading }] =
    usePurchaseMutation()

  const { isOpen, cartState, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(close())
    reset()
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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O cep precisa de 8 dígitos')
        .max(9, 'O cep precisa de 8 dígitos')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().min(
        7,
        'O complemento precisa ter pelo menos 7 caracteres'
      ),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão precisa ter 16 dígitos')
        .max(19, 'O número do cartão precisa ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O cvv precisa ter 3 dígitos')
        .max(3, 'O cvv precisa ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.number()
        .min(1, 'O mês precisa estar entre 1 e 12')
        .max(12, 'O mês precisa estar entre 1 e 12')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano precisa ter 2 dígitos')
        .max(2, 'O ano precisa ter 2 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.addressNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
      resetForm()
      setSubmitting(false)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isInvalid = fieldName in form.errors
    const isTouched = fieldName in form.touched
    const hasError = isInvalid && isTouched

    return hasError
  }

  const deliveryInfoIsValid = () => {
    if (
      'fullName' in form.errors ||
      'address' in form.errors ||
      'city' in form.errors ||
      'cep' in form.errors ||
      'addressNumber' in form.errors ||
      'complement' in form.errors ||
      form.dirty === false
    ) {
      alert(
        'As informações de entrega devem estar preenchidas com valores válidos'
      )
    } else {
      changePage(2)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (isSuccess && data) {
    return (
      <S.MenuContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeMenu} />
        <S.MenuContent>
          <S.FinishedContainer>
            <h3>Pedido realizado - {data.orderId}</h3>
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
  } else if (cartState === 0) {
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
  } else {
    return (
      <S.MenuContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeMenu} />
        <S.MenuContent>
          <form onSubmit={form.handleSubmit}>
            {cartState === 1 ? (
              <S.FormContainer>
                <h3>Entrega</h3>
                <S.GridContainer>
                  <S.InputContainer>
                    <S.Label htmlFor="fullName">Quem irá receber?</S.Label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('fullName') ? 'hasError' : ''
                      }
                    />
                  </S.InputContainer>
                  <S.InputContainer>
                    <S.Label htmlFor="address">Endereço</S.Label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('address') ? 'hasError' : ''
                      }
                    />
                  </S.InputContainer>
                  <S.InputContainer>
                    <S.Label htmlFor="city">Cidade</S.Label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'hasError' : ''}
                    />
                  </S.InputContainer>
                  <S.InputSeparator>
                    <S.InputContainer>
                      <S.Label htmlFor="cep">CEP</S.Label>
                      <InputMask
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'hasError' : ''}
                        mask="99999-999"
                        maskChar={null}
                      />
                    </S.InputContainer>
                    <S.InputContainer>
                      <S.Label htmlFor="addressNumber">Número</S.Label>
                      <InputMask
                        type="text"
                        id="addressNumber"
                        name="addressNumber"
                        value={form.values.addressNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('addressNumber') ? 'hasError' : ''
                        }
                        mask="99999999999"
                        maskChar={null}
                      />
                    </S.InputContainer>
                  </S.InputSeparator>
                  <S.InputContainer>
                    <S.Label htmlFor="complement">
                      Complemento (opcional)
                    </S.Label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'hasError' : ''
                      }
                    />
                  </S.InputContainer>
                </S.GridContainer>
                <S.NextButton
                  type="button"
                  onClick={() => deliveryInfoIsValid()}
                >
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
                    <S.Label htmlFor="cardName">Nome no cartão</S.Label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardName') ? 'hasError' : ''
                      }
                    />
                  </S.InputContainer>
                  <S.InputSeparator firstInput="2" secondInput="1">
                    <S.InputContainer>
                      <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                      <InputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'hasError' : ''
                        }
                        mask="9999 9999 9999 9999"
                        maskChar={null}
                      />
                    </S.InputContainer>
                    <S.InputContainer>
                      <S.Label htmlFor="cardCode">CVV</S.Label>
                      <InputMask
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'hasError' : ''
                        }
                        mask="999"
                        maskChar={null}
                      />
                    </S.InputContainer>
                  </S.InputSeparator>
                  <S.InputSeparator>
                    <S.InputContainer>
                      <S.Label htmlFor="expiresMonth">
                        Mês do vencimento
                      </S.Label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'hasError' : ''
                        }
                        mask="99"
                        maskChar={null}
                      />
                    </S.InputContainer>
                    <S.InputContainer>
                      <S.Label htmlFor="expiresYear">Ano do vencimento</S.Label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'hasError' : ''
                        }
                        mask="99"
                        maskChar={null}
                      />
                    </S.InputContainer>
                  </S.InputSeparator>
                </S.GridContainer>
              </S.FormContainer>
            )}
            {cartState === 2 ? (
              <>
                <S.NextButton type="submit" disabled={isLoading}>
                  <Tag size="big" invertColors="yes">
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
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
  }
}

export default LateralMenu
