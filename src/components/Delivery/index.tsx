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
  move: (num: number) => void
}

const Delivery = ({ move }: Props) => (
  <FormContainer>
    <h3>Entrega</h3>
    <GridContainer>
      <InputContainer>
        <Label htmlFor="nome">Quem irá receber?</Label>
        <Input type="text" id="nome" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="address">Endereço</Label>
        <Input type="text" id="address" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="city">Cidade</Label>
        <Input type="text" id="city" />
      </InputContainer>
      <InputSeparator>
        <InputContainer>
          <Label htmlFor="cep">CEP</Label>
          <Input type="text" id="cep" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="phone">Número</Label>
          <Input type="text" id="phone" />
        </InputContainer>
      </InputSeparator>
      <InputContainer>
        <Label htmlFor="complement">Complemento (opcional)</Label>
        <Input type="text" id="complement" />
      </InputContainer>
    </GridContainer>
    <NextButton onClick={() => move(2)}>
      <Tag size="big" invertColors="yes">
        Continuar com o pagamento
      </Tag>
    </NextButton>
    <NextButton onClick={() => move(0)}>
      <Tag size="big" invertColors="yes">
        Voltar para o carrinho
      </Tag>
    </NextButton>
  </FormContainer>
)

export default Delivery
