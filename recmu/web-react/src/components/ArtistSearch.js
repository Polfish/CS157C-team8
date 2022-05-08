import React from 'react'
//import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Box, Card } from '@material-ui/core'
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
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
  box: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  },
  card: {
    padding: '1rem',
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
  if (loading) return 'Loading...'
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <h2>Search Results</h2>
      <Title>Related to {artistName}</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {loading ? 'Loading...' : data.findRelatedArtists.length} Artists found
      </Typography>
      <Box className={classes.box}>
        {data.findRelatedArtists.map((result) => (
          <Card key={result.artistName} className={classes.card}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography
                component="p"
                variant="h4"
                className={classes.results}
              >
                {result}
              </Typography>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderIcon />
                </IconButton>
              </CardActions>
            </Stack>
          </Card>
        ))}
      </Box>
    </React.Fragment>
  )
}
