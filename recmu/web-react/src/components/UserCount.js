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
  query($name: String) {
    search(name: $name)
  }
`

export default function Deposits({ name }) {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY, {
    variables: { name },
  })
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <Title>Search Results</Title>
      <Typography component="p" variant="h4" className={classes.results}>
        {loading ? 'Loading...' : data.search.join('\n')}
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View songs
        </Link>
      </div>
    </React.Fragment>
  )
}
