import Movie from "./Movies";
import MovieHeader from "./MovieHeader";

function MoviesList({arr}){

    return (
        <div className="container-fluid mt-3" style={{"width":"100%"}}>
                <MovieHeader />
                {
                    arr.map(value => (
                        <Movie title={value.title} genre={value.genre} year={value.year}/>
                    ))   
                }

            </div>
    )
}

export default MoviesList;