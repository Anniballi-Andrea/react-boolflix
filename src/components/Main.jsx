
import { useGlobalProvider } from "../context/GlobalContext"


export default function Main() {
    const { movieList, tvSeries, voteNumber } = useGlobalProvider()





    return (
        <main>
            <div className="container">
                <div className="row g-3">
                    {
                        movieList != undefined && movieList.map((el) => (
                            <div key={el.id} className="col-md-4 relative hover mb-3">
                                <div className="card min_width_100">
                                    {el.poster_path != undefined ? <img src={`http://image.tmdb.org/t/p/w342/${el.poster_path}`} alt="" /> :
                                        <img src={`http://image.tmdb.org/t/p/w342/b3R1LWvraY6RJWfIu3aLXBF1ra8.jpg`} alt="" />}
                                </div>
                                <div className="card absolute">
                                    <div className="py-3 "><span className="bold">Title:</span> {el.title}</div>
                                    <div className="py-3 "><span className="bold">Original title:</span> {el.original_title}</div>
                                    <div className="py-3 "><span className="bold">Original language</span> {el.original_language != "en" ?
                                        <span className={`fi fi-${el.original_language} `}></span> : <span className="fi fi-us"></span>}</div>
                                    <div className="py-3 "><span className="bold">vote:</span> {voteNumber(el.vote_average)}</div>
                                    <div className="py-3 "><span className="bold">Overview:</span> {el.overview}</div>
                                </div>


                            </div>
                        ))
                    }
                    {
                        tvSeries != undefined && tvSeries.map((el) => (
                            <div key={el.id} className="col-md-4 relative hover">
                                <div className="card min_width_100">
                                    {el.poster_path != undefined ? <img src={`http://image.tmdb.org/t/p/w342/${el.poster_path}`} alt="" /> :
                                        <img src={`http://image.tmdb.org/t/p/w342/b3R1LWvraY6RJWfIu3aLXBF1ra8.jpg`} alt="" />}
                                </div>
                                <div className="card absolute">
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