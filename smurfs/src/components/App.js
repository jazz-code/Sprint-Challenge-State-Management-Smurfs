import React from "react";
import "../styles/App.css";
import SmurfList from "./SmurfList";
// import FormikSmurfForm from "./SmurfForm";
 import Form from "./Form";

const App = props => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
       <SmurfList/>
       {/* <FormikSmurfForm/> */}
      <Form/>
      </div>
    );
  
}

export default App;
