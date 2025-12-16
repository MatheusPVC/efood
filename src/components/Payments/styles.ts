import styled from 'styled-components'

type InputSeparatorCustom = {
  firstInput?: string
  secondInput?: string
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.input`
  height: 32px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  margin-bottom: 24px;
`

export const InputSeparator = styled.div<InputSeparatorCustom>`
  display: grid;
  grid-template-columns: ${({ firstInput = '1' }: InputSeparatorCustom) =>
      firstInput + 'fr'} ${({ secondInput = '1' }: InputSeparatorCustom) =>
      secondInput + 'fr'};
  column-gap: 30px;
`

export const NextButton = styled.button`
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
`
