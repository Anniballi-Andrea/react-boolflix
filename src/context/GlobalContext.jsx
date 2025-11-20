import { createContext, useContext, useState } from "react";
import axios from "axios"


const GlobalContext = createContext()


function Globalprovider({ children }) {
    const [movieList, setMovieList] = useState([])
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
                element.push(<span key={i}><i className="bi bi-star-fill"></i></span>)
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
