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
export default function Dashboard({ name }) {
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
        {/* Ratings Chart */}
        {/* <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper}>
            <RatingsChart />
          </Paper>
        </Grid> */}
        {/* User Count */}
        <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper}>
            <SongSearch songName={name} />
            {/* <ArtistSearch artistName={name} /> */}
            {/* <AlbumSearch albumName={name} /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={5}>
          <Paper className={fixedHeightPaper}>
            {/* <SongCount /> */}
            <ArtistSearch artistName={name} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={10} lg={15}>
          <Paper className={fixedHeightPaper}>
            <AlbumSearch albumName={name} />
            {/* <ArtistSearch /> */}
          </Paper>
        </Grid>
        {/* Recent Reviews */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentReviews />
          </Paper>
        </Grid> */}
      </Grid>
    </React.Fragment>
  )
}
