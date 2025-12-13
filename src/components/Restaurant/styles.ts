import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const RestaurantContainer = styled.div`
  max-width: 472px;
  max-height: 398px;
  height: 398px;
  width: 100%;
  background-color: ${cores.branca};
  display: flex;
  flex-direction: column;
  position: relative;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 181px;
  height: 100%;
  border-right: 1px solid ${cores.rosa};
  border-left: 1px solid ${cores.rosa};
  border-bottom: 1px solid ${cores.rosa};
  padding: 8px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    max-height: 88px;
    height: 88px;
    max-width: 456px;
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
  }
`

export const CustomLink = styled(Link)`
  height: 24px;

  ${TagContainer} {
    height: 100%;
  }
`

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-left: 8px;
  }

  h2 {
    font-size: 18px;
  }
`

export const ImageContainer = styled.div`
  max-height: 217px;
  height: 217px;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0;
  img {
    max-width: 100%;
    position: relative;
    bottom: 40px;
  }
`

export const TagList = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  z-index: 1;

  ${TagContainer} {
    margin-left: 8px;
  }
`
