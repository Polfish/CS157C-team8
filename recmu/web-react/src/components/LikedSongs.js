import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ListGroup from 'react-bootstrap/ListGroup'
import LikeButton from './LikeButton'

const GET_LIKED_SONGS_QUERY = gql`
  query($userName: String) {
    findLikedSongs(userName: $userName)
  }
`

export default function LikedSongs() {
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
  const createLikedSongsList = (result) => {
    return (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{result}</div>
        </div>
        {data ? (
          <LikeButton
            songName={result}
            likedSong={data.findLikedSongs.includes(result)}
          />
        ) : null}
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
