import { genres } from "../Data"

function FilterButton(){

    function  filter(gen){
        console.log("Filtered by", gen);
    }

    return (
        <div className="container-fluid d-flex flex-wrap justify-content-center " style={{"width": "100%", "height":""}}>
            {
                genres.map((btn) =>(
                    <button className="btn btn-light m-1 d-flex  text-center" onClick={()=>{
                        filter(btn);
                    }}>{btn}</button>
                ))
            }   
        </div>
    )
}


export default FilterButton;