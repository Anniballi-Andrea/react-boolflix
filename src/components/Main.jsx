import { useState } from "react"
import { useGlobalProvider } from "../context/GlobalContext"


export default function Main() {
    const { movieList, movieSearch } = useGlobalProvider()
    const [flag, setFlag] = useState()




    return (
        <main>
            <ul>
                {
                    movieList != undefined && movieList.map((el) => (


                        <li key={el.id}>{el.title},{el.original_title},{el.original_language != "en" ?
                            <span className={`fi fi-${el.original_language}`}></span> : <span className="fi fi-us"></span>}
                            ,{el.vote_average}
                        </li>

                    ))
                }
            </ul>

        </main>

    )
}
/* */