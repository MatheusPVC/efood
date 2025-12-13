import RestaurantClass from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { ListContainer } from './styles'
type Props = {
  restaurants: RestaurantClass[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ListContainer className="container">
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <Restaurant
          name={restaurant.name}
          description={restaurant.description}
          image={restaurant.image}
          infos={restaurant.infos}
          stars={restaurant.stars}
        />
      </li>
    ))}
  </ListContainer>
)

export default RestaurantList
