import React from 'react'
import { useQuery, gql } from '@apollo/client'
// import { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
// import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Button from 'react-bootstrap/Button'

import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'

const GET_LIKED_SONGS_QUERY = gql`
  query($userName: String) {
    findLikedSongs(userName: $userName)
  }
`

// const REMOVE_SONG_FROM_LIKES_QUERY = gql`
//   query($userName: String, $songName: String) {
//     removeLikeFromSong(userName: $userName, songName: $songName)
//   }
// `

// const REMOVE_SONG_FROM_LIKES_QUERY = gql``

export default function LikedSongs() {
  // const [likedSongs, setLikedSongs] = useState([])
  // const [userName, setUsername] = useState('Default')
  // const [songToDislike, setSongToDislike] = useState('')
  const userName = 'Test'
  const { loading, error, data } = useQuery(GET_LIKED_SONGS_QUERY, {
    variables: { userName },
  })
  if (loading) return 'Loading...'
  if (error) {
    console.log(error)
    return <p>Error: help!</p>
  }
  console.log('Liked songs: ' + data.findLikedSongs)
  // const [dislikeSongQuery, { loading2, error2, data2 }] = useLazyQuery(
  //   REMOVE_SONG_FROM_LIKES_QUERY
  // )
  // const [dislikeSongQuery, { l, e, d }] = useLazyQuery(
  //   REMOVE_SONG_FROM_LIKES_QUERY
  // )
  // useEffect(() => {
  //   if (songToDislike) {
  //     dislikeSongQuery({
  //       variables: {
  //         // userName: userName,
  //         songName: songToDislike,
  //       },
  //     })
  //   }
  // }, [])
  // const dislikeSong = (e) => {
  //   const songName = e.target.name
  //   setSongToDislike(songName)
  //     // dislikeSongQuery({
  //     //   variables: { userName, songName },
  //     // })
  // }
  const createLikedSongsList = (row) => {
    return (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{row}</div>
        </div>
        <FontAwesomeIcon
          className="mx-4"
          style={{ color: 'red', fontSize: '20px' }}
          icon={faHeart}
        />
        {/* <button name={row}>
            <FontAwesomeIcon
              style={{
                color: 'black',
                fontSize: '20px',
              }}
              icon={faXmark}
            />
            X
          </button> */}
      </ListGroup.Item>
    )
  }
  // console.log('Liked songs: ', likedSongs)
  return (
    <div>
      <ListGroup>
        {data.findLikedSongs.map((i) => createLikedSongsList(i))}
      </ListGroup>
    </div>
  )
}
