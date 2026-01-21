import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

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
  const [restaurantes, SetRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => SetRestaurantes(data))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
