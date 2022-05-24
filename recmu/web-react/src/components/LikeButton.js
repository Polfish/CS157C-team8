import React from 'react'
import { gql, useMutation } from '@apollo/client'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'

const LIKE_SONG = gql`
  mutation LikeSong($userName: String, $songName: String) {
    likeSong(userName: $userName, songName: $songName) {
      name
    }
  }
`

const DISLIKE_SONG = gql`
  mutation DislikeSong($userName: String, $songName: String) {
    dislikeSong(userName: $userName, songName: $songName) {
      name
    }
  }
`

export default function LikeButton({ songName, likedSong }) {
  const [likesSong, setLikesSong] = useState(likedSong)
  const [likeSong] = useMutation(LIKE_SONG)
  const [dislikeSong] = useMutation(DISLIKE_SONG)

  console.log(likedSong + ' ' + songName)
  const handleFavorite = () => {
    console.log('handleFavorite')
    if (!likesSong) {
      likeSong({
        variables: { userName: 'Test', songName: songName },
      })
    } else {
      dislikeSong({
        variables: { userName: 'Test', songName: songName },
      })
    }

    setLikesSong(!likesSong)
  }
  return (
    <IconButton onClick={handleFavorite}>
      {likesSong ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  )
}
