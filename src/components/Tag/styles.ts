import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  background-color: ${(props) =>
    props.invertColors == 'yes' ? cores.begeEscuro : cores.rosa};
  color: ${(props) =>
    props.invertColors == 'yes' ? cores.rosa : cores.begeEscuro};
  font-weight: bold;
  padding: ${(props) => (props.size === 'small' ? '6px 4px' : '4px 6px')};
  display: inline-block;
`
