import { useGlobalProvider } from "../context/GlobalContext.jsx"


export default function Header() {
    const { fetchMovie } = useGlobalProvider()


    return (

        <header>
            <div className="container-fluid">
                <input type="text" />
                <button onClick={fetchMovie}>cliccami</button>
            </div>
        </header>
    )
}