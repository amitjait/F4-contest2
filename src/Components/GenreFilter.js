import FilterButton from "./FilterButton"

function GenreFilter(){
    
    return (
        <div className="container-fluid bg-body-secondary rounded justify-content-center p-2" style={{"width": "58%", "height":""}}>
            <h2 className="ms-3">Filter by Genre</h2>
            <FilterButton />
        </div>  
    )
}


export default GenreFilter;