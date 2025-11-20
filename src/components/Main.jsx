
import { useGlobalProvider } from "../context/GlobalContext"


export default function Main() {
    const { movieList, tvSeries, voteNumber } = useGlobalProvider()





    return (
        <main>
            <div className="container">
                <div className="row">
                    {
                        movieList != undefined && movieList.map((el) => (
                            <div key={el.id} className="col-md-4">
                                <div className="card">
                                    {el.poster_path != undefined ? <img src={`http://image.tmdb.org/t/p/w342/${el.poster_path}`} alt="" /> :
                                        <img src={`http://image.tmdb.org/t/p/w342/b3R1LWvraY6RJWfIu3aLXBF1ra8.jpg`} alt="" />}
                                </div>
                                <div className="card">
                                    <div><span>Title:</span> {el.title}</div>
                                    <div><span>Original title:</span>{el.original_title}</div>
                                    <div><span>Original language;</span>{el.original_language != "en" ?
                                        <span className={`fi fi-${el.original_language}`}></span> : <span className="fi fi-us"></span>}</div>
                                    <div><span>vote:</span>{voteNumber(el.vote_average)}</div>
                                    <div><span>Overview:</span>{el.overview}</div>
                                </div>


                            </div>
                        ))
                    }
                    {
                        tvSeries != undefined && tvSeries.map((el) => (
                            <div key={el.id} className="col-md-4">
                                <div className="card">
                                    {el.poster_path != undefined ? <img src={`http://image.tmdb.org/t/p/w342/${el.poster_path}`} alt="" /> :
                                        <img src={`http://image.tmdb.org/t/p/w342/b3R1LWvraY6RJWfIu3aLXBF1ra8.jpg`} alt="" />}
                                </div>
                                <div className="card">
                                    <div><span>Title:</span> {el.name}</div>
                                    <div><span>Original title:</span>{el.original_name}</div>
                                    <div><span>Original language;</span>{el.original_language != "en" ?
                                        <span className={`fi fi-${el.original_language}`}></span> : <span className="fi fi-us"></span>}</div>
                                    <div><span>vote:</span>{voteNumber(el.vote_average)}</div>
                                    <div><span>Overview:</span>{el.overview}</div>
                                </div>


                            </div>
                        ))
                    }

                </div>
            </div>
        </main >

    )
}
/* */