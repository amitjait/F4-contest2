

function FilterButton({arr}){

    function  filter(gen){
        console.log("Filtered by", gen);
    }

    return (
        <div className="container-fluid d-flex flex-wrap justify-content-center  " style={{"width": "100%", "height":""}}> 
            {
                arr.map(btn => (
                    <button className="btn btn-light m-1 d-flex text-center w-auto" onClick={()=>{filter(btn); }}>{btn}</button>
                ))
            }

        </div>
    )
}


export default FilterButton;