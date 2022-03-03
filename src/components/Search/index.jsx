import { TextField, Button } from '@mui/material'
import { Container, Content } from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import addDigimonsThunk from '../../store/modules/digimons/thunks'

const Search = () => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleSearch = () => {
      setError(false)
      dispatch(addDigimonsThunk(input,setError))
      setInput('')
    }
    
  return (
    <Container>
        <h2>Procure pelo seu Digimon</h2>
      <Content>
        <TextField
          label='DIGIMON'
          value={input}
          onChange={(event) => setInput(event.target.value.toLocaleLowerCase())}
          helperText={error && 'Digimon inválido'}
          error = {error}
        />
        <Button variant='contained' onClick={handleSearch} helperText="">Pesquisar</Button>
      </Content>
    </Container>
  )
}

export default Search
