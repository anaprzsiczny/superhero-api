import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadDataRequest } from '../store/ducks/superheroes/actions';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'

const SearchBar = () => {

  const name = useRef<HTMLInputElement>(null)

  const [error, setError] = useState<string>("")

  const dispatch = useDispatch()

  const searchHero = () => {
    if(name?.current?.value !== ""){
      dispatch(loadDataRequest(name?.current?.value))
      setError("")
    } else {
      setError("Digite o nome de um personagem!")
    }
    
  }

  return (
    <div>
      <Typography variant="h1">SuperHero Search</Typography>
      <TextField id="outlined-error-helper-text" label="SuperHero" variant="outlined" inputRef={name} helperText={error}/>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={searchHero}>Search</Button>
    </div>
  )
}

export default SearchBar