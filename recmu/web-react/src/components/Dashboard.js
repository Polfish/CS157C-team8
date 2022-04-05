import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

// import RatingsChart from './RatingsChart'
import SongSearch from './SongSearch'
// import SongCount from './SongCount'
import ArtistSearch from './ArtistSearch'
import AlbumSearch from './AlbumSearch'
// import RecentReviews from './RecentReviews'
export default function Dashboard({ name, songFlag, artistFlag, albumFlag }) {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={10} lg={15}>
          <Paper className={fixedHeightPaper}>
            <h2>Search Results</h2>
            {/* Ternary operator using the three boolean values to decide what component to show */}
            {songFlag ? (
              <SongSearch songName={name} />
            ) : artistFlag ? (
              <ArtistSearch artistName={name} />
            ) : albumFlag ? (
              <AlbumSearch albumName={name} />
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
