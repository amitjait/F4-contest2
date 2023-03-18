
function MovieHeader(){
    return (
        <div className="container-custom d-flex " style={{"width": "59%", "height":"fit-content"}}>
            <div className="container-md border bg-secondary-subtle text-wrap d-flex" style={{"width":"60%", "height" : "35px"}}><b>Title</b></div>
            <div className="container-md border bg-secondary-subtle text-wrap d-flex" style={{"width":"25%", "height" : "35px"}}><b>Genre</b></div>
            <div className="container-md border bg-secondary-subtle text-wrap d-flex" style={{"width":"20%", "height" : "35px"}}><b>year</b></div>
        </div>
    )
}

export default MovieHeader;