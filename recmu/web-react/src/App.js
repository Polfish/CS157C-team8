import React, { useState } from 'react'

import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

// import UserList from './components/UserList'

import clsx from 'clsx'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { blue, pink } from '@material-ui/core/colors'

import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PersonIcon from '@mui/icons-material/Person'
import AlbumIcon from '@mui/icons-material/Album'

// import SearchBar from 'material-ui-search-bar'
import {
  CssBaseline,
  // Drawer,
  Box,
  AppBar,
  Toolbar,
  // List,
  Typography,
  Button,
  // Divider,
  IconButton,
  Container,
  Link as MUILink,
  TextField,
  // InputAdornment,
  // ListItem,
  // ListItemText,
  // ListItemIcon,
} from '@material-ui/core'
// import { Link } from 'react-router-dom'
// import // ChevronLeft as ChevronLeftIcon,
// Menu as MenuIcon,
// Dashboard as DashboardIcon,
// People as PeopleIcon,
import { SearchOutlined } from '@material-ui/icons'
import Dashboard from './components/Dashboard'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MUILink color="inherit" href="https://grandstack.io/">
        RecMu NoSQL CS 157C Team 8
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  spacer: {
    marginBottom: theme.spacing(10),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      // backgroundImage: `url("https://via.placeholder.com/500")`
      // backgroundImage: `img/RecMuTitleBarImage.png`,
      backgroundColor: 'red',
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '120vh',
    overflow: 'auto',
  },
  aboutUs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  box: {
    paddingTop: theme.spacing(6),
    padding: theme.spacing(2),
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    gap: theme.spacing(2),
    alignItems: 'end',
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
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  appBarImage: {
    maxHeight: '75px',
    paddingRight: '20px',
  },
  searchBar: {
    width: '50%',
  },
}))

const defaultTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
})

const AboutUs = () => (
  <div>
    <p>About us</p>
  </div>
)

export default function App() {
  const classes = useStyles()

  // toggle color change on button when clicked to indicate recommendation is for what type
  const [songflag, setSongFlag] = useState(false)
  const [artistflag, setArtistFlag] = useState(false)
  const [albumflag, setAlbumFlag] = useState(false)

  // switches to other color after song button clicked
  const handleSongClick = () => {
    // Only inverts the flag when another flag is clicked
    if (!songflag) {
      setSongFlag(!songflag)
    }
    setArtistFlag(false)
    setAlbumFlag(false)
    setSearched(search)
    setSearch('')
  }

  // switches to other color after artist button clicked
  const handleArtistClick = () => {
    // Only inverts the flag when another flag is clicked
    if (!artistflag) {
      setArtistFlag(!artistflag)
    }
    setSongFlag(false)
    setAlbumFlag(false)
    setSearched(search)
    setSearch('')
  }

  // switches to other color after album button clicked
  const handleAlbumClick = () => {
    // Only inverts the flag when another flag is clicked
    if (!albumflag) {
      setAlbumFlag(!albumflag)
    }
    setSongFlag(false)
    setArtistFlag(false)
    setSearched(search)
    setSearch('')
  }

  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState('')

  const handleSearch = () => {
    console.log(search)
    setSearched(search)
    setSearch('')
  }

  // const Search = () => (
  //   <div>
  //     <Box className={classes.box}>
  //       <TextField
  //         id="input-with-icon-textfield"
  //         placeholder="Search for song, album, or artist"
  //         InputProps={{
  //           startAdornment: (
  //             <IconButton onClick={handleSearch}>
  //               <SearchOutlined />
  //             </IconButton>
  //           ),
  //         }}
  //         onChange={({ target }) => setSearch(target.value)}
  //         fullWidth
  //         value={search}
  //         variant="standard"
  //         className={classes.searchBar}
  //       />

  //       {/*GUI for the 3 buttons*/}
  //       <Box>
  //         <Button
  //           onClick={handleSongClick}
  //           color={songflag ? 'primary' : 'secondary'}
  //           variant="contained"
  //           style={{ marginRight: '15px' }}
  //         >
  //           Song
  //           <MusicNoteIcon />
  //         </Button>
  //         <Button
  //           onClick={handleArtistClick}
  //           color={artistflag ? 'primary' : 'secondary'}
  //           variant="contained"
  //           style={{ marginRight: '15px' }}
  //         >
  //           Artist
  //           <PersonIcon />
  //         </Button>
  //         <Button
  //           onClick={handleAlbumClick}
  //           variant="contained"
  //           color={albumflag ? 'primary' : 'secondary'}
  //         >
  //           Album
  //           <AlbumIcon />
  //         </Button>
  //       </Box>
  //     </Box>
  //   </div>
  // )

  const showSearchResults = () => {
    const name = searched
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              // <>
              <Dashboard
                name={name}
                songFlag={songflag}
                artistFlag={artistflag}
                albumFlag={albumflag}
              />
              // {/* <Search />
              // </> */}
            )}
          />
          {/* <Route exact path="/businesses" component={UserList} />z */}
          <Route path="/aboutUs" component={AboutUs} />
          {/* <Route exact path="/users" component={UserList} /> */}
        </Switch>
      </div>
    )
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          //style={{ background: 'img/RecMuTitleBarImage.png' }}
          style={{ backgroundColor: '#de6262' }}
          position="fixed"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          width="auto"
          // src="img/RecMuTitleBarImage.png"
          // backgroundImage="img/RecMuTitleBarImage.png"
        >
          {/* <img
            // className={classes.appBarImage}
            src="img/RecMuTitleBarImage.png"
            alt="Title Bar Image"
          /> */}
          {/* <div src="img/RecMuTitleBarImage.png"></div> */}
          {/* AppBar.style.top = '150px'; AppBar.style.left = '150px'; */}
          <Toolbar className={classes.toolbar}>
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <img
              className={classes.appBarImage}
              src="img/RecMuTitleBarImage.png"
              alt="Title Bar"
            /> */}
            <Typography
              component="h1"
              variant="h8"
              color="inherit"
              noWrap
              className={classes.title}
            >
              RecMu
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.aboutUs}
            >
              <Link to="/aboutUs"> About Us </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/" className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>

            <Link to="/users" className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer> */}
        {/* <SearchBar
          value={this.state.value}
          // onChange={(newValue) => this.setState({ value: newValue })}
          // onRequestSearch={() => doSomethingWith(this.state.value)}
          // onRequestSearch={console.log('Hello')}
        /> */}
        <ThemeProvider theme={defaultTheme} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            <div>
              <Box className={classes.box}>
                <TextField
                  id="input-with-icon-textfield"
                  placeholder="Search for song, album, or artist"
                  InputProps={{
                    startAdornment: (
                      <IconButton onClick={handleSearch}>
                        <SearchOutlined />
                      </IconButton>
                    ),
                  }}
                  onChange={({ target }) => setSearch(target.value)}
                  fullWidth
                  value={search}
                  variant="standard"
                  className={classes.searchBar}
                />

                {/*GUI for the 3 buttons*/}
                <Box>
                  <Button
                    onClick={handleSongClick}
                    color={songflag ? 'primary' : 'secondary'}
                    variant="contained"
                    style={{ marginRight: '15px' }}
                  >
                    Song
                    <MusicNoteIcon />
                  </Button>
                  <Button
                    onClick={handleArtistClick}
                    color={artistflag ? 'primary' : 'secondary'}
                    variant="contained"
                    style={{ marginRight: '15px' }}
                  >
                    Artist
                    <PersonIcon />
                  </Button>
                  <Button
                    onClick={handleAlbumClick}
                    variant="contained"
                    color={albumflag ? 'primary' : 'secondary'}
                  >
                    Album
                    <AlbumIcon />
                  </Button>
                </Box>
              </Box>
            </div>
            {/*<h2>Search Results</h2>*/}

            {showSearchResults()}
            <Box m={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </Router>
  )
}
