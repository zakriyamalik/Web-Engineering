export const Movie = function(props){

    // props.name = "Ayaz";
    return <div>
        <h3>Name: {props.name}</h3>
        <input type="text" onChange={props.change}/>
        {/* <h3>Rating: {props.rating}</h3> */}
    </div>
}