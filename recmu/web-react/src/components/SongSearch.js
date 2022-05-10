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
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'

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

export default function Deposits({ songName }) {
  const [isCardView, setCardView] = useState(new Map())

  const handleFavorite = (k, v) => {
    setCardView(new Map(isCardView.map(k, v)))
  }
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
      <Box className={classes.box}>
        {data.findRelatedSongs.map((result) => (
          // <h2 key={result.songName}>{result}</h2>
          <Card key={result.songName} className={classes.card}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography
                component="p"
                variant="h4"
                className={classes.results}
              >
                {result}
              </Typography>
              <CardActions>
                <IconButton
                  onClick={handleFavorite}
                  // onTouchStartCapture={() => {
                  //   this.setState({
                  //     isCardView: !this.state.isCardView,
                  //   })
                  // }}
                >
                  {isCardView ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </IconButton>
              </CardActions>
            </Stack>
          </Card>
        ))}
      </Box>
    </React.Fragment>
  )
}
