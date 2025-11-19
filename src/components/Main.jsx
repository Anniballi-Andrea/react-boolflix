import { useGlobalProvider } from "../context/GlobalContext"


export default function Main() {
    const { movieList, movieSearch } = useGlobalProvider()


    return (
        <main>
            <ul>
                {
                    movieSearch != undefined && movieList.map((el) => (
                        <li key={el.id}>{el.title},{el.original_title},{el.original_language},{el.vote_average}</li>
                    ))
                }
            </ul>
        </main>

    )
}
/* */