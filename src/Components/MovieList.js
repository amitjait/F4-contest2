
function MoviesList({title, year, genre}){

    return (
        <div className="container-md d-flex" style={{"width": "62%", "height":"fit-content"}}>
            <div className="container-md border text-wrap p-1" style={{"width":"60%", "height" : "100%"}}>{title}</div>
            <div className="container-md border p-1" style={{"width":"25%", "height" : "100%"}}>{genre}</div>
            <div className="container-md border p-1" style={{"width":"20%", "height" : "100%"}}>{year}</div>
        </div>
    )
}

export default MoviesList;