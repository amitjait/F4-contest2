
function MovieHeader(){
    return (
        <div className="container-md d-flex " style={{"width": "62%", "height":"fit-content"}}>
            <div className="container-md border bg-secondary-subtle p-1" style={{"width":"60%", "height" : "35px"}}><b>Title</b></div>
            <div className="container-md border bg-secondary-subtle p-1" style={{"width":"25%", "height" : "35px"}}><b>Genre</b></div>
            <div className="container-md border bg-secondary-subtle p-1" style={{"width":"20%", "height" : "35px"}}><b>year</b></div>
        </div>
    )
}

export default MovieHeader;