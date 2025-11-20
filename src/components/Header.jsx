
import { useGlobalProvider } from "../context/GlobalContext.jsx"


export default function Header() {
    const { fetchMovie, setReserch } = useGlobalProvider()



    return (

        <header>
            <div className="container-fluid">
                <form onSubmit={fetchMovie}>
                    <div className="d-flex justify-content-between pt-2 allign">
                        <div className="logo">BoolFlix</div>
                        <input type="search" onChange={(e) => setReserch(e.target.value)} placeholder="search movie" required />

                    </div>
                </form>
            </div>
        </header>
    )
}