import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"


const GlobalContext = createContext()


function Globalprovider({ children }) {
    const [movieList, setMovieList] = useState([{
        "adult": false,
        "backdrop_path": "/17UicwOSvWjHUpT5arG20PoM66e.jpg",
        "genre_ids": [
            35
        ],
        "id": 25606,
        "original_language": "it",
        "original_title": "Fantozzi",
        "overview": "A good-natured but unlucky Italian is constantly going on a difficult situations, but never lose his mood.",
        "popularity": 4.6505,
        "poster_path": "/b3R1LWvraY6RJWfIu3aLXBF1ra8.jpg",
        "release_date": "1975-03-27",
        "title": "Fantozzi: White Collar Blues",
        "video": false,
        "vote_average": 7.825,
        "vote_count": 852
    },
    {
        "adult": false,
        "backdrop_path": "/uh4OMg71YBjADDMlYRo1glAOZq9.jpg",
        "genre_ids": [
            35
        ],
        "id": 38285,
        "original_language": "it",
        "original_title": "Il ragazzo di campagna",
        "overview": "A man is forced to completely change his habits when he decides to move from the country to the city.",
        "popularity": 2.3828,
        "poster_path": "/A7Krc9fQqTQSKXpgldSOjvNBg89.jpg",
        "release_date": "1984-12-20",
        "title": "Il ragazzo di campagna",
        "video": false,
        "vote_average": 6.811,
        "vote_count": 403
    },
    {
        "adult": false,
        "backdrop_path": "/FzjWIXu3n714sYxQHq3TPEWz16.jpg",
        "genre_ids": [
            28,
            35,
            37
        ],
        "id": 9394,
        "original_language": "it",
        "original_title": "Lo chiamavano Trinità...",
        "overview": "The simple story has the pair coming to the rescue of peace-loving Mormons when land-hungry Major Harriman sends his bullies to harass them into giving up their fertile valley. Trinity and Bambino manage to save the Mormons and send the bad guys packing with slapstick humor instead of excessive violence, saving the day.",
        "popularity": 5.1691,
        "poster_path": "/qY7iV4BJD5IXJU4iXlcZxKN8s9w.jpg",
        "release_date": "1970-12-22",
        "title": "They Call Me Trinity",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1387
    }])
    const [tvSeries, setTvSeries] = useState([])
    const [movieSearch, setMovieSearch] = useState()
    const [Reserch, setReserch] = useState([])


    const api_key = import.meta.env.VITE_BOOLFLIX_KEY

    function fetchMovie(e) {
        e.preventDefault()

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${Reserch}`)
            .then((res) => setMovieList(res.data.results))

            .catch((err) => console.log(err))

        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=it_IT&query=${Reserch}`)
            .then((res) => setTvSeries(res.data.results))
            .catch((err) => console.log(err))


        setReserch([])


    }




    function voteNumber(nunber) {

        const newNumber = Math.floor(nunber / 2)
        const element = []
        for (let i = 1; i < 6; i++) {
            if (newNumber == 0) {
                element.push("N/A")
                break
            }
            else if (i <= newNumber) {
                element.push(<span key={i}><i className="bi bi-star-fill color_yellow"></i></span>)
            } else {
                element.push(<span key={i}><i className="bi bi-star"></i></span>)

            }

        }
        return (element)
    }





    const values = {
        movieList,
        setMovieList,
        fetchMovie,
        setMovieSearch,
        movieSearch,
        setReserch,
        Reserch,
        tvSeries,
        voteNumber

    }

    return (

        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalProvider() {

    const context = useContext(GlobalContext)
    return context
}

export { Globalprovider, useGlobalProvider }
