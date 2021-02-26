import React from 'react';
import { useSelector } from 'react-redux';
import { SuperHero } from '../store/ducks/superheroes/types';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const Info = () => {

  const {loading, arraySuperHeroes, error} = useSelector((state: any) => state.superHero)

  return (
    <div>
      { loading && <CircularProgress /> }

      {
        arraySuperHeroes &&
        arraySuperHeroes.map((item: SuperHero) => (
          <Card key={item.id}>
            <CardContent>
              <Typography variant="h2">{item.name}</Typography>
              <Typography variant="h3">{item.biography.fullName}</Typography>
              <Typography variant="body1">{item.biography.alterEgos}</Typography>
              <Typography variant="body1">{item.biography.firstAppearance}</Typography>
              <Typography variant="body1">{item.biography.publisher}</Typography>
              <Typography variant="body2">{item.work.base}</Typography>
              <Typography variant="body2">{item.work.occupation}</Typography>
              <Typography variant="body2">{item.connections.groupAffiliation}</Typography>
              <Typography variant="body2">{item.connections.relatives}</Typography>
              <CardMedia> <img src={item.image.url} alt={item.name} /></CardMedia>
            </CardContent>
          </Card>
        ))
      }

      <p>{error}</p>
    </div>
  )
}

export default Info