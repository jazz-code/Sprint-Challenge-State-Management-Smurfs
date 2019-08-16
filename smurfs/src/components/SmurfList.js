import React from 'react'
import { connect } from 'react-redux';
import Loader from "react-loader-spinner"

import { getData } from "../actions"

import Smurf from "./Smurf"

const SmurfList = props => {
    return (
        <div>
            <h1>Smurfz</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="TailSpin" />
                ) : (
                    "Get Smurf Data"
                )}
            </button>
            {props.smurfs && props.smurfs.map(ele => <Smurf key={ele.id} smurf={ele}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getData})(SmurfList)