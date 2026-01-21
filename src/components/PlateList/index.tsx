import { useEffect, useState } from 'react'
import { Restaurante } from '../../pages/Home'
import ModalBox from '../Modal'
import Plate from '../Plate'
import { PlateListContainer } from './styles'

type Props = {
  restaurant: Restaurante
}

const PlateList = ({ restaurant }: Props) => {
  return (
    <>
      <PlateListContainer className="container">
        {restaurant.cardapio.map((plate) => (
          <li key={plate.id}>
            <Plate prato={plate} />
          </li>
        ))}
      </PlateListContainer>
    </>
  )
}

export default PlateList
