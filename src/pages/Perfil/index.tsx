import pizza from '../../assets/images/Pizza.png'

import Banner from '../../components/Banner'
import NavBar from '../../components/NavBar'
import PlateList from '../../components/PlateList'
import PlateClass from '../../models/Plate'
import ModalBox from '../../components/Modal'

import Modal from 'react-modal'
import { useState } from 'react'
import LateralMenu from '../../components/LateralMenu'

Modal.setAppElement('#root')
const Perfil = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function openMenu() {
    setMenuIsOpen(true)
  }

  function closeMenu() {
    setMenuIsOpen(false)
  }

  const plates: PlateClass[] = [
    {
      id: 1,
      image: pizza,
      title: 'Pizza Marguerida',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 2,
      image: pizza,
      title: 'Pizza Marguerida',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 3,
      image: pizza,
      title: 'Pizza Marguerida',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 4,
      image: pizza,
      title: 'Pizza Marguerida',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 5,
      image: pizza,
      title: 'Pizza Marguerida',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 6,
      image: pizza,
      title: 'Pizza Marguerida',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }
  ]

  return (
    <>
      <NavBar lateralMenuFunction={openMenu} />
      <Banner />
      <PlateList plates={plates} openModalFunction={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="example"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 'none',
            borderRadius: 0
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <ModalBox closeFunction={closeModal} />
      </Modal>
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
