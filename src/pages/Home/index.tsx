import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsListQuery } from '../../services/api'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: true
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsListQuery()

  if (!restaurantes) {
    return <div>Carregando...</div>
  }
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
