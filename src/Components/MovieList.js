
function MoviesList({title, year, genre}){

    return (
        <div className="container-md d-flex" style={{"width": "60%", "height":"35px"}}>
            <div className="container-md border" style={{"width":"60%", "height" : "35px"}}>{title}</div>
            <div className="container-md border" style={{"width":"25%", "height" : "35px"}}>{genre}</div>
            <div className="container-md border" style={{"width":"20%", "height" : "35px"}}>{year}</div>
        </div>
    )
}

export default MoviesList;