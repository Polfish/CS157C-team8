import React from 'react'
//import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Box, Card } from '@material-ui/core'
//import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions'
import LikeButton from './LikeButton'

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
  },
  card: {
    padding: '1rem',
  },
})

const GET_COUNT_QUERY = gql`
  query($songName: String) {
    findRelatedSongs(songName: $songName)
  }
`

const GET_LIKED_SONGS_QUERY = gql`
  query($userName: String) {
    findLikedSongs(userName: $userName)
  }
`

export default function Deposits({ songName }) {
  const theme = useTheme()

  const classes = useStyles(theme)
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const userName = 'Test'
  const { data: likedSongs } = useQuery(GET_LIKED_SONGS_QUERY, {
    variables: { userName },
  })

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
      <Box className={classes.box}>
        {data.findRelatedSongs.map((result) => (
          <Card key={result} className={classes.card}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography
                component="p"
                variant="h4"
                className={classes.results}
              >
                {result}
              </Typography>
              <CardActions>
                {likedSongs ? (
                  <LikeButton
                    songName={result}
                    likedSong={likedSongs.findLikedSongs.includes(result)}
                  />
                ) : null}
              </CardActions>
            </Stack>
          </Card>
        ))}
      </Box>
    </React.Fragment>
  )
}
