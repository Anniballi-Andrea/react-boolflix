import { useState } from "react"
import { useGlobalProvider } from "../context/GlobalContext.jsx"


export default function Header() {
    const { fetchMovie, setMovieSearch } = useGlobalProvider()



    return (

        <header>
            <div className="container-fluid">
                <input type="text" onChange={(e) => setMovieSearch(e.target.value)} placeholder="search movie" />
                <button onClick={fetchMovie}>cliccami</button>
            </div>
        </header>
    )
}