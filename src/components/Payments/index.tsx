import Tag from '../Tag'
import {
  FormContainer,
  GridContainer,
  Input,
  InputContainer,
  InputSeparator,
  Label,
  NextButton
} from './styles'

type Props = {
  mover: (num: number) => void
}

const Payment = ({ mover }: Props) => (
  <FormContainer>
    <h3>Pagamento - Valor a pagar R$ 190,90</h3>
    <GridContainer>
      <InputContainer>
        <Label htmlFor="nome-cartao">Nome no cartão</Label>
        <Input type="text" id="nome-cartao" />
      </InputContainer>
      <InputSeparator firstInput="2" secondInput="1">
        <InputContainer id="numero-cartao-container">
          <Label htmlFor="numero-cartao">Número do cartão</Label>
          <Input type="text" id="numero-cartao" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="nome">CVV</Label>
          <Input type="text" id="cvv" />
        </InputContainer>
      </InputSeparator>
      <InputSeparator>
        <InputContainer>
          <Label htmlFor="mes-vencimento">Mês do vencimento</Label>
          <Input type="text" id="mes-vencimento" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="ano-vencimento">Ano do vencimento</Label>
          <Input type="text" id="ano-vencimento" />
        </InputContainer>
      </InputSeparator>
    </GridContainer>
    <NextButton onClick={() => mover(3)}>
      <Tag size="big" invertColors="yes">
        Finalizar pagamento
      </Tag>
    </NextButton>
    <NextButton onClick={() => mover(1)}>
      <Tag size="big" invertColors="yes">
        Voltar para a edição de endereço
      </Tag>
    </NextButton>
  </FormContainer>
)

export default Payment
