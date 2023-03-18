
function MovieHeader(){
    return (
        <div className="container-md d-flex " style={{"width": "60%", "height":"35px"}}>
            <div className="container-md border bg-secondary-subtle" style={{"width":"60%", "height" : "35px"}}><b>Title</b></div>
            <div className="container-md border bg-secondary-subtle" style={{"width":"25%", "height" : "35px"}}><b>Genre</b></div>
            <div className="container-md border bg-secondary-subtle" style={{"width":"20%", "height" : "35px"}}><b>year</b></div>
        </div>
    )
}

export default MovieHeader;