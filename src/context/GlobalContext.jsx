import { createContext, useContext, useState } from "react";
import axios from "axios"


const GlobalContext = createContext()


function Globalprovider({ children }) {
    const [movieList, setMovieList] = useState([])
    const [movieSearch, setMovieSearch] = useState()

    const api_key = import.meta.env.VITE_BOOLFLIX_KEY

    function fetchMovie() {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movieSearch}`)
            .then((res) => setMovieList(res.data.results))


    }


    const values = {
        movieList,
        setMovieList,
        fetchMovie,
        setMovieSearch,
        movieSearch

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
