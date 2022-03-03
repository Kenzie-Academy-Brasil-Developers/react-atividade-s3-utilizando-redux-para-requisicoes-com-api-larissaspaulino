import {useSelector} from 'react-redux'
import DigimonCard from '../DigimonCard'
import { CardList } from './styles'

const DigimonsList = () => {

    const digimons = useSelector(state => state.digimons)


    return (
        <>
            <CardList>
                {digimons.map((digimon, index) => (
                    <DigimonCard digimon={digimon} key={index} />
                ))}
            </CardList>
            
        </>
    )
}

export default DigimonsList