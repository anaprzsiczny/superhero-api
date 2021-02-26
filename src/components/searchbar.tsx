import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loadDataRequest } from '../store/ducks/superheroes/actions';
import Button from '@material-ui/core/Button'

const SearchBar = () => {

  const name = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const searchHero = () => {
    dispatch(loadDataRequest(name?.current?.value))
  }

  return (
    <div>
      <input type="text" placeholder="The name of your favorite Superhero" ref={name}></input>
      <Button variant="contained" color="primary" onClick={searchHero}>Search</Button>
    </div>
  )
}

export default SearchBar