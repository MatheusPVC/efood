import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { ListContainer } from './styles'
type Props = {
  restaurants: Restaurante[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ListContainer className="container">
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <Restaurant
          id={restaurant.id}
          name={restaurant.titulo}
          description={restaurant.descricao}
          image={restaurant.capa}
          tipo={restaurant.tipo}
          destacado={restaurant.destacado}
          stars={restaurant.avaliacao}
        />
      </li>
    ))}
  </ListContainer>
)

export default RestaurantList
