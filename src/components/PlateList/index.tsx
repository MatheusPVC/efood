import PlateClass from '../../models/Plate'
import Plate from '../Plate'
import { PlateListContainer } from './styles'

type Props = {
  plates: PlateClass[]
  openModalFunction: () => void
}

const PlateList = ({ plates, openModalFunction }: Props) => (
  <PlateListContainer className="container">
    {plates.map((plate) => (
      <li key={plate.id}>
        <Plate
          image={plate.image}
          title={plate.title}
          description={plate.description}
          buttonFunction={openModalFunction}
        />
      </li>
    ))}
  </PlateListContainer>
)

export default PlateList
