import React from 'react'
//import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Box, Card } from '@material-ui/core'
//import clsx from 'clsx'
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

const GET_COUNT_QUERY = gql`
  query($songName: String) {
    findRelatedSongs(songName: $songName)
  }
`

export default function Deposits({ songName }) {
  const theme = useTheme()

  const classes = useStyles(theme)
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const { loading, error, data } = useQuery(GET_COUNT_QUERY, {
    variables: { songName },
  })

  if (loading) return 'Loading...'
  if (error) return <p>Error: help!</p>
  return (
    <React.Fragment>
      <h2>Search Results</h2>
      <Title>Related to {songName}</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {data.findRelatedSongs.length} Songs found
      </Typography>
      <div>
        {/*<Link to="/songs" className={classes.navLink}>
          View songs
        </Link>*/}
      </div>
      <Box
        sx={{
          display: 'flex',
          flexwrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
          flexdirection: 'column',
        }}
      >
        {data.findRelatedSongs.map((result) => (
          // <h2 key={result.songName}>{result}</h2>
          <Card key={result.songName}>
            <Typography component="p" variant="h4" className={classes.results}>
              {result}
            </Typography>
          </Card>
        ))}
      </Box>
    </React.Fragment>
  )
}
