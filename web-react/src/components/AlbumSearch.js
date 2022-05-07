import React from 'react'
//import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

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
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <h2>Search Results</h2>
      <Title>Related to {albumName}</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {loading ? 'Loading...' : data.findRelatedAlbums.length} Albums found
      </Typography>
      <Paper>
        <Typography component="p" variant="h4" className={classes.results}>
          {loading ? 'Loading...' : data.findRelatedAlbums.join('\n')}
        </Typography>
      </Paper>
      {/*<div>
        <Link to="/albums" className={classes.navLink}>
          View albums
        </Link>
      </div>*/}
    </React.Fragment>
  )
}
