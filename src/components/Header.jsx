export default function Header({ fetch }) {


    return (

        <header>
            <div className="container-fluid">
                <input type="text" />
                <button onClick={fetch}>cliccami</button>
            </div>
        </header>
    )
}