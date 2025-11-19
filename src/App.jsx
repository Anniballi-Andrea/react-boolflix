import axios from "axios"
import Header from "./components/Header"

import { useEffect, useState } from "react"
import Main from "./components/Main.JSX"

function App() {

  const [movieList, setMovieList] = useState([])

  const api_key = import.meta.env.VITE_BOOLFLIX_KEY

  function fetchMovie() {

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=Matrix`)
      .then((res) => setMovieList(res.data.results))

    console.log(movieList)
  }

  //
  return (
    <>
      <Header fetch={fetchMovie} />
      <Main movieList={movieList} />

    </>
  )
}

export default App
