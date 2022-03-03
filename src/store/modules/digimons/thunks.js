import { addDigimon } from './actions'
import api from '../../../services/api'
// import {getState} from 'react-redux'
import {toast } from 'react-toastify';

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  // const {digimons} = getState()

  api
    .get(`/name/${digimon}`)
    .then((res) => {
      // const updatedList = {...digimons, res.data}
      // dispatch(addDigimon(updatedList))
      
      dispatch(addDigimon(res.data[0]))
    })
    .catch(() => setError(true))
}

export default addDigimonsThunk
