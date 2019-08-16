import React from 'react'


const Smurf = props => {
    return (
      <div>
        <h4>{props.smurf.name}</h4>
        <h4>{props.smurf.age}</h4>
        <h4>{props.smurf.height}</h4>
      </div>
    );
  };
  
  export default Smurf;
  