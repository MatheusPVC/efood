import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.begeEscuro};
`

export const FooterItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 40px 0px;
`

export const ContactList = styled.li`
  margin: 32.5px 0 80px;

  button {
    border: none;
    height: 24px;
    width: 24px;
  }

  button:nth-child(2) {
    margin: 0 8px;
  }

  img {
    width: 100%;
  }
`

export const Text = styled.p`
  max-width: 480px;
  width: 100%;
  font-size: 10px;
  text-align: center;
`
