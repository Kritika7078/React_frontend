export const FillDetails=()=>{
    return(
        <div className="admin-body">
            <div className="FillDetails">
            <h1 className="FillDetails-heading">Fill in the Details</h1>
            <label htmlFor='favColor'>Select the no. of Parties</label>
                <br></br>
            <select id='favColor'>
            <option value="">--select your no. of parties--</option>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            </select>
            <br></br>
            <button id="FillDeatils-button">Manually</button>
            <br></br>
            <button id="FillDeatils-button">Automatically</button>
            </div>
        </div>
    )
}