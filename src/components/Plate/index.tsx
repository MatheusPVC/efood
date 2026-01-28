import { useState } from 'react'
import { Prato } from '../../pages/Home'
import ModalBox from '../Modal'
import Tag from '../Tag'

import { PlateContainer, Modal } from './styles'

type Props = {
  prato: Prato
}

const Plate = ({ prato }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  const [modal, setModal] = useState(false)

  function openModal() {
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  return (
    <>
      <PlateContainer>
        <img src={prato.foto} alt="pizza" />
        <h2>{prato.nome}</h2>
        <p>{getDescricao(prato.descricao)}</p>
        <button onClick={() => openModal()}>
          <Tag invertColors="yes" size="big">
            Mais detalhes
          </Tag>
        </button>
      </PlateContainer>
      <Modal className={modal ? 'visible' : ''}>
        <ModalBox closeFunction={closeModal} prato={prato} />
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Plate
