import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import RestaurantClass from '../../models/Restaurant'

import suchi from '../../assets/images/Suchi.png'
import macarrao from '../../assets/images/Macarrão.png'

const ApiRestaurants: RestaurantClass[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    name: 'Hioki Sushi',
    stars: 4.5,
    image: suchi,
    infos: ['Destaque da semana', 'japonesa']
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: macarrao,
    infos: ['italiana']
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: macarrao,
    infos: ['italiana']
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: macarrao,
    infos: ['italiana']
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: macarrao,
    infos: ['italiana']
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: macarrao,
    infos: ['italiana']
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurants={ApiRestaurants} />
  </>
)

export default Home
