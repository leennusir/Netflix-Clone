import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Favorite(props) {

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        const variable = {
            movieId: props.title,
            movieTitle: props.movieInfo.original_title,
            movieImage: props.movieInfo.backdrop_path,
            movieOverview: props.overview
        }


        axios.post('https://js-movie-application.herokuapp.com/addMovie', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.favoriteNumber)
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('Failed to get favoriteNumber')
                }
            })

        axios.post('https://js-movie-application.herokuapp.com/addMovie', variable)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('Failed to get Favorite Info')
                }
            })

    }, [])


    return (
        <div>
            <button >{Favorited ? " remove from Favortie " : " Add to Favorite"}{FavoriteNumber}</button>

        </div>
    )
}

export default Favorite