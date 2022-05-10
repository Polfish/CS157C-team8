import React from 'react'
//import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Box, Card } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
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

const GET_REL_ALBUMS_QUERY = gql`
  query($albumName: String) {
    findRelatedAlbums(albumName: $albumName)
  }
`

export default function Deposits({ albumName }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  const { loading, error, data } = useQuery(GET_REL_ALBUMS_QUERY, {
    variables: { albumName },
  })
  if (loading) return 'Loading...'
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <h2>Search Results</h2>
      <Title>Related to {albumName}</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {loading ? 'Loading...' : data.findRelatedAlbums.length} Albums found
      </Typography>

      <Box className={classes.box}>
        {data.findRelatedAlbums.map((result) => (
          <Card key={result.albumName} className={classes.card}>
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
