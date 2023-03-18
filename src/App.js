import MoviesList from "./Components/MovieList";
import {movies} from "./Data";
import MovieHeader from "./Components/MovieHeader";
import GenreFilter from "./Components/GenreFilter";
import "./style.css"


function App(){

    return (
        <div>
            <div className="container-fluid text-center p-2" style={{"width":"50%"}}><h1>Top 15 Movies of All Time</h1></div>
            <GenreFilter />
            <div className="container-fluid mt-3" style={{"width":"100%"}}>
                <MovieHeader />
                {
                    movies.map((value) => (
                        <MoviesList title={value.title} genre={value.genre} year={value.year}/>
                    ))
                }
            </div>
        </div>
    )
}

export default App;