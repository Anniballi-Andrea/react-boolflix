
import { useGlobalProvider } from "../context/GlobalContext"


export default function Main() {
    const { movieList, tvSeries } = useGlobalProvider()





    return (
        <main>
            <ul>
                {
                    movieList != undefined && movieList.map((el) => (


                        <li key={el.id}>
                            <img src={`http://image.tmdb.org/t/p/w200/${el.poster_path}`} alt="" />
                            {el.title},{el.original_title},{el.original_language != "en" ?
                                <span className={`fi fi-${el.original_language}`}></span> : <span className="fi fi-us"></span>}
                            ,{el.vote_average}
                        </li>

                    ))
                }
            </ul>
            <ul>
                {
                    tvSeries != undefined && tvSeries.map((el) => (


                        < li key={el.id} >
                            <img src={`http://image.tmdb.org/t/p/w200/${el.poster_path}`} alt="" />
                            {el.name}, {el.original_name},
                            {el.original_language != "en" ?
                                <span className={`fi fi-${el.original_language}`}></span> : <span className="fi fi-us"></span>},
                            {el.vote_average}.
                        </li>


                    ))
                }

            </ul>

        </main >

    )
}
/* */