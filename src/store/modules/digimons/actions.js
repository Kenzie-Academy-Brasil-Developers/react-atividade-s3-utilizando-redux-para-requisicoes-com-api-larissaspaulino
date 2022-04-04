import { ADD_DIGIMONS, DEL_DIGIMONS } from "./actionTypes"


export const addDigimon = (newDigimon) => ({
    type: ADD_DIGIMONS,
    newDigimon,
})

export const delDigimon = (removedDigimon) => ({
    type: DEL_DIGIMONS,
    removedDigimon,
})
