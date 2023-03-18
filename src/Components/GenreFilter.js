import FilterButton from "./FilterButton"
import { genres } from "../Data";

function GenreFilter(){

    
    return (
        <div className="container-fluid bg-body-secondary rounded justify-content-center p-2" style={{"width": "58%", "height":""}}>
            <h2 className="ms-4">Filter by Genre</h2>
            <FilterButton arr={genres}/>
        </div>  
    )
}


export default GenreFilter;