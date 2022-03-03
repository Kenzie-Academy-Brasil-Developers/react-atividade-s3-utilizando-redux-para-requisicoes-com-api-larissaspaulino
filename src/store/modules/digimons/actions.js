import { ADD_DIGIMONS } from "./actionTypes"
import { DEL_DIGIMONS } from "./actionTypes"


export const addDigimon = (newDigimon) => ({
    type: ADD_DIGIMONS,
    newDigimon,
})

export const delDigimon = (removedDigimon) => ({
    type: DEL_DIGIMONS,
    removedDigimon,
})
