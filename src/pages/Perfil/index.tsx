import Banner from '../../components/Banner'
import NavBar from '../../components/NavBar'
import PlateList from '../../components/PlateList'
import ModalBox from '../../components/Modal'

import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import LateralMenu from '../../components/LateralMenu'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'

Modal.setAppElement('#root')
const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function openMenu() {
    setMenuIsOpen(true)
  }

  function closeMenu() {
    setMenuIsOpen(false)
  }

  if (!restaurante) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <NavBar lateralMenuFunction={openMenu} />
      <Banner restaurante={restaurante} />
      <PlateList restaurant={restaurante} />
      <Modal
        isOpen={menuIsOpen}
        onRequestClose={closeMenu}
        contentLabel="example"
        style={{
          content: {
            top: 0,
            left: 'auto',
            right: 0,
            bottom: 'auto',
            padding: 0,
            border: 'none',
            borderRadius: 0
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <LateralMenu closeMenuFunction={closeMenu} />
      </Modal>
    </>
  )
}

export default Perfil
