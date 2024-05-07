import {QUERY_ME} from '../utlis/queries'
import {useQuery, useMutation} from '@apollo/client'
import { useEffect, useState} from 'react'
import { ADD_FAVORITE } from '../utlis/mutations'

export default function YourFavoritePage() {

    const {loading, data} = useQuery(QUERY_ME)
    const [favorites, setFavorites] = useState({})

    const [addFavorite] = useMutation(ADD_FAVORITE)

    const handleFavoriteButton = (placeId) => {
        setFavorites((prevState) => {
          const newFavorites = {
            ...prevState,
            [placeId]: !prevState[placeId],
          }
    
          // if it is favorite, call addFavorite mutation
          if (newFavorites[placeId]) {
            let restaurants = JSON.parse(localStorage.getItem('restaurants'))
            let favoriteRestaurant = restaurants.restaurants.find(
              (restaurant) => restaurant.place_id === placeId,
            )
            const { place_id, name, formatted_address, rating, photoUrl } =
              favoriteRestaurant
            addFavorite({
              variables: {
                places: [{ place_id, name, formatted_address, rating, photoUrl }],
              },
            })
          } else {
            // if not favorite call removeFavorite mutation
            // removeFavoriteMutation();
          }
    
          return newFavorites
        })
      }



    if(loading) return <div>Loading...</div>
    

    return(
        <>
            
            {data.me.favorite.length!==0?(
                <h1 className='favorite-title'> Your Favorite Restaurants</h1>
            ):(
                <h1 className='favorite-title'> You have no favorite restaurants yet</h1>
            )}
            
            <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center align-items-center">
                {data &&
                data.me.favorite.map((place) => (
                    <div className="col favorite-card-container" key={place.place_id}>
                    <div className="card">
                        <img
                        src={place.photoUrl}
                        className="card-img-top result-image"
                        alt="Restaurant Photo"
                        />
                        <div className="icon-container">
                        <button
                            className="favorite-btn"
                            id="favorite-btn"
                            onClick={() => handleFavoriteButton(place.place_id)}
                        >
                            <img
                            className="favorite-icon"
                            src={
                                favorites[place.place_id]
                                ? '/image/heart.png'
                                : '/image/love.png'
                            }
                            alt=""
                            />
                        </button>
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">{place.name}</h5>
                        <p className="card-text">Rating: {place.rating} / 5</p>
                        <p className="card-address">
                            Address: {place.formatted_address}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

        </>
    )
}