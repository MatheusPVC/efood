import Banner from '../../components/Banner'
import NavBar from '../../components/NavBar'
import PlateList from '../../components/PlateList'
import ModalBox from '../../components/Modal'

import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import LateralMenu from '../../components/LateralMenu'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'
import { useGetRestaurantQuery } from '../../services/api'

Modal.setAppElement('#root')
const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestaurantQuery(id as string)

  if (!restaurante) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <NavBar />
      <Banner restaurante={restaurante} />
      <PlateList restaurant={restaurante} />
    </>
  )
}

export default Perfil
