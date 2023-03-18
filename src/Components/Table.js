import { movies } from "../Data";
import MoviesList from "./MovieList";
import MovieHeader from "./MovieHeader";

function Table(){
    return (
        <table className=" table mt-3 table-hover container-fluid w-75 " >
            <thead className=""><MovieHeader /></thead>
                <tbody>
                {
                    movies.map((value) => (
                       <MoviesList title={value.title} genre={value.genre} year={value.year}/>
                    ))
                }
                </tbody>
        </table>
        
    )
}

export default Table;