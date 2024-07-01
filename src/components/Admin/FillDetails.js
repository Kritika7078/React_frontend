import { useState } from "react";
import React from "react";
import { Card } from "./Card";

export const FillDetails=()=>{

  const [numberOfDivs, setNumberOfDivs] = useState(0);
  const [divsArray, setDivsArray] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumberOfDivs(value);
  };

  const handleCreateDivs = () => {
    const divs = [];
    for (let i = 0; i < numberOfDivs; i++) {
      divs.push(<div key={i} className="dynamic-div"><Card party={i+1} /></div>);
    }
    setDivsArray(divs);
  };

    return(
        <div className="admin-body">
            <div className="FillDetails">
            <h1 className="FillDetails-heading">Fill in the Details</h1>
            <label htmlFor="numberOfDivs">Select the no. of Parties</label>
                <br></br> 
                <input
                    type="number"
                    id="numberOfDivs"
                    name="numberOfDivs"
                    value={numberOfDivs}
                    onChange={handleInputChange}
                />
            <br></br>
            <button id="FillDeatils-button" onClick={handleCreateDivs} >Manually</button>
            <br></br>
            <button id="FillDeatils-button">Automatically</button>
            </div>
            <div className="divs-container">
         {divsArray.map((div, index) => (
           <React.Fragment key={index}>{div}</React.Fragment>
         ))}
       </div>
        </div>
    )
}
