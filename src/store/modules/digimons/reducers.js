import {ADD_DIGIMONS} from './actionTypes'
import { DEL_DIGIMONS } from "./actionTypes"


const digimonsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DIGIMONS:
            const { newDigimon } = action
            return [...state, newDigimon]
            // return [...state, action.newDigimon]

            case DEL_DIGIMONS: 
            const { removedDigimon } = action 
            const newDigimonList = state.filter(digimon => digimon.name !== removedDigimon.name)
            return newDigimonList

        default: 
            return state
    }
}

export default digimonsReducer