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
})

const GET_COUNT_QUERY = gql`
  {
    songCount
  }
`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <Title>Total Songs</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.songCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        songs found
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View songs
        </Link>
      </div>
    </React.Fragment>
  )
}
