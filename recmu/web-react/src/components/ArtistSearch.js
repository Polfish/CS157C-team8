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

const GET_REL_ARTISTS_QUERY = gql`
  query($artistName: String) {
    findRelatedArtists(artistName: $artistName)
  }
`

export default function Deposits({ artistName }) {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_REL_ARTISTS_QUERY, {
    variables: { artistName },
  })
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <Title>Related to {artistName}</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.findRelatedArtists.join('\n')}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Artists found
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View artists
        </Link>
      </div>
    </React.Fragment>
  )
}
