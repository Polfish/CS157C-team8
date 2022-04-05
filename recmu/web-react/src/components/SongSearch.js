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

const GET_COUNT_QUERY = gql`
  query($songName: String) {
    findRelatedSongs(songName: $songName)
  }
`

export default function Deposits({ songName }) {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY, {
    variables: { songName },
  })
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <Title>Search Results</Title>
      <Typography component="p" variant="h4" className={classes.results}>
        {loading ? 'Loading...' : data.findRelatedSongs.join('\n')}
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View songs
        </Link>
      </div>
    </React.Fragment>
  )
}
