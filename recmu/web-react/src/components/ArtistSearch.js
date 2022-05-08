import React from 'react'
//import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Card } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

//import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
  results: {
    whiteSpace: 'pre-wrap',
  },
})

const GET_REL_ARTISTS_QUERY = gql`
  query($artistName: String) {
    findRelatedArtists(artistName: $artistName)
  }
`

export default function Deposits({ artistName }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  const { loading, error, data } = useQuery(GET_REL_ARTISTS_QUERY, {
    variables: { artistName },
  })
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <h2>Search Results</h2>
      <Title>Related to {artistName}</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {loading ? 'Loading...' : data.findRelatedArtists.length} Artists found
      </Typography>
      {loading
        ? 'Loading...'
        : data.findRelatedArtists.map((result) => (
            <Card key={result.artistName}>
              <Typography
                component="p"
                variant="h4"
                className={classes.results}
              >
                {result}
                <FavoriteBorderIcon />
              </Typography>
            </Card>
          ))}
    </React.Fragment>
  )
}
