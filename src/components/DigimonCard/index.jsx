import { Card } from './styles'
import { useDispatch } from 'react-redux'
import { delDigimon } from '../../store/modules/digimons/actions'

const DigimonCard = ({ digimon }) => {
  const dispatch = useDispatch()

  return (
    <Card onClick={() => dispatch(delDigimon(digimon))}>
      <img src={digimon.img} />
      <div>
        <h3>{digimon.name}</h3>
        <p>Level: {digimon.level}</p>
      </div>
    </Card>
  )
}
export default DigimonCard
