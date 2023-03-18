
function Movie({title, year, genre}){

    return (
        <div className="container-custom d-flex hover" style={{"width": "59%", "height":"fit-content"}}>
            <div className="container-md border text-wrap min-h" style={{"width":"60%", }}>{title}</div>
            <div className="container-md border text-wrap min-h" style={{"width":"25%", }}>{genre}</div>
            <div className="container-md border text-wrap min-h" style={{"width":"20%", }}>{year}</div>
        </div>
    )
}

export default Movie;