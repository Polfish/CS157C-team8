import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'
import { Box, Card } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

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

const GETSONGCATALOG = gql`
  query GetSongs {
    songs {
      name
    }
  }
`

export default function SongCatalogue() {
  const theme = useTheme()
  const classes = useStyles(theme)

  const { loading, error, data } = useQuery(GETSONGCATALOG)

  if (loading) return 'Loading...'
  if (error) return <p>Error: help!</p>

  console.log('Hello')
  console.log('Liked songs: ' + data.songs)
  return (
    <React.Fragment>
      <h2>Our Music Catalog</h2>
      <Title>Prepare your ears..</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {data.songs.length} Songs found
      </Typography>
      <Box className={classes.box}>
        {data.songs.map((result) => (
          <Card key={result.name} className={classes.card}>
            <Typography component="p" variant="h4" className={classes.results}>
              {result.name}
            </Typography>
            <FavoriteBorderIcon />
          </Card>
        ))}
      </Box>
    </React.Fragment>
  )
}

// import React, { useState } from 'react'
// import { useQuery, useLazyQuery, gql } from '@apollo/client'
// import { useEffect } from 'react'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Badge from 'react-bootstrap/Badge'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Button from 'react-bootstrap/Button'

// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'

// export default function LikedSongs() {
//   const [likedSongs, setLikedSongs] = useState([])
//   const [userName, setUsername] = useState('Default')
//   const [songToDislike, setSongToDislike] = useState('')

//   const { loading, error, data } = useQuery(GET_LIKED_SONGS_QUERY, {
//     variables: { userName },
//   })
//   if (loading) return 'Loading...'
//   if (error) {
//     console.log(error)
//     return <p>Error: help!</p>
//   }
//   console.log('Liked songs: ' + data.findLikedSongs)

//   //   const [dislikeSongQuery, { loading2, error2, data2 }] = useLazyQuery(
//   //     REMOVE_SONG_FROM_LIKES_QUERY
//   //   )
//   //   const [dislikeSongQuery, { l, e, d }] = useLazyQuery(
//   //     REMOVE_SONG_FROM_LIKES_QUERY
//   //   )

//   //   useEffect(() => {
//   //     if (songToDislike) {
//   //       dislikeSongQuery({
//   //         variables: {
//   //           userName: userName,
//   //           songName: songToDislike,
//   //         },
//   //       })
//   //     }
//   //   }, [])

//   //   const dislikeSong = (e) => {
//   //     const songName = e.target.name
//   //     setSongToDislike(songName)
//   //     //   dislikeSongQuery({
//   //     //     variables: { userName, songName },
//   //     //   })
//   //   }

//   const createLikedSongsList = (row) => {
//     return (
//       <ListGroup.Item
//         as="li"
//         className="d-flex justify-content-between align-items-start"
//       >
//         <div className="ms-2 me-auto">
//           <div className="fw-bold">{row}</div>
//         </div>

//         <FontAwesomeIcon
//           className="mx-4"
//           style={{ color: 'red', fontSize: '20px' }}
//           icon={faHeart}
//         />

//         {/* <button name={row}>
//           <FontAwesomeIcon
//             style={{
//               color: 'black',
//               fontSize: '20px',
//             }}
//             icon={faXmark}
//           />
//           X
//         </button> */}
//       </ListGroup.Item>
//     )
//   }

//   console.log('Liked songs: ', likedSongs)
//   return (
//     <div>
//       <ListGroup>
//         {data.findLikedSongs.map((i) => createLikedSongsList(i))}
//       </ListGroup>
//     </div>
//   )
// }
