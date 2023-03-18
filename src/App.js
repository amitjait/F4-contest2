import MoviesList from "./Components/MovieList";
import {movies} from "./Data";
import GenreFilter from "./Components/GenreFilter";
import "./style.css"


function App(){

    return (
        <div>
            <div className="container-fluid text-center p-2" style={{"width":"50%"}}><h1>Top 15 Movies of All Time</h1></div>
            <GenreFilter />
            <MoviesList arr={movies} />
            {
                console.log(movies)
            }
        </div>
    )
}

export default App;