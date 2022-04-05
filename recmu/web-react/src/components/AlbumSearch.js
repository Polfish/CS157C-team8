import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

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
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_REL_ALBUMS_QUERY, {
    variables: { albumName },
  })
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <Title>Related Albums</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.findRelatedAlbums.join('\n')}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Albums found
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View albums
        </Link>
      </div>
    </React.Fragment>
  )
}