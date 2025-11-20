
import { useGlobalProvider } from "../context/GlobalContext.jsx"


export default function Header() {
    const { fetchMovie, setMovieSearch, setReserch } = useGlobalProvider()



    return (

        <header>
            <div className="container-fluid">
                <form onSubmit={fetchMovie}>
                    <input type="search" onChange={(e) => setReserch(e.target.value)} placeholder="search movie" required />
                    <button type="submit">Search</button>
                </form>
            </div>
        </header>
    )
}