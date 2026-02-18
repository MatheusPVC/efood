import Banner from '../../components/Banner'
import NavBar from '../../components/NavBar'
import PlateList from '../../components/PlateList'

import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

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
