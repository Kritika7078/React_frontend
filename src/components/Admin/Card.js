export const Card=(props)=>{
    return(
            <div className="party-card">  
            <h1>Party {props.party}</h1>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
            <label htmlFor="id">Id No.</label>
            <input id="id" type="string"></input>
            <label htmlFor="phone">Phone No.</label>
            <input id="phone" type="string"></input>
            </div>
    )
}