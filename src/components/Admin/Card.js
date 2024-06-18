export const Card=()=>{
    return(
        <div className="admin-card">
            <div id="card-body">
            <div className="party-card">  
            <h1>Party 1</h1>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
            <label htmlFor="id">Id No.</label>
            <input id="id" type="string"></input>
            <label htmlFor="phone">Phone No.</label>
            <input id="phone" type="string"></input>
            </div>
            </div>
            <div  id="card-body">
            <div className="party-card">
            <h1>Party 2</h1>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
            <label htmlFor="id">Id No.</label>
            <input id="id" type="string"></input>
            <label htmlFor="phone">Phone No.</label>
            <input id="phone" type="string"></input>
            </div>
            </div>
            
        </div>
    )
}