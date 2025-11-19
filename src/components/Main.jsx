export default function Main({ movieList }) {

    /**/

    return (
        <main>
            <ul>
                {
                    movieList.map((el) => (
                        <li>{el.title},{el.original_title},{el.original_language},{el.vote_average}</li>
                    ))
                }
            </ul>
        </main>

    )
}