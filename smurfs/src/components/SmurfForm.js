


// export const POST_SMURF_DATA_FAILURE = "POST_SMURF_DATA_FAILURE"

// export const getData = () => dispatch => {
//     dispatch({type: POST_SMURF_DATA_START});
//     axios
//     .post("http://localhost:3333/smurfs")
//     .then(res => {
//         console.log(res.data)
//     dispatch({type: POST_SMURF_DATA_SUCCESS, payload: res.data})
// })
//     .catch(err => {console.log(err)})
//     dispatch({type: POST_SMURF_DATA_FAILURE})

// }

import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import { postData } from "../actions"
import * as Yup from 'yup';

export const POST_SMURF_DATA_START = "POST_SMURF_DATA_START"
export const POST_SMURF_DATA_SUCCESS = "POST_SMURF_DATA_SUCCESS"

const SmurfForm = (props) => {
  const { errors, touched, values, handleSubmit, status, dispatch } = props
const [smurfs, setSmurfs] = useState([])
  console.log("smurfs", props.smurfs);
  // const dispatch = useDispatch()

  useEffect(() => {
    if (status) {
      props.smurfs([...props.smurfs, status]);
    }
  }, [status]);

  return (
    <div className="smurf-form">
      <h1>Smurf Form</h1>
      <Form>
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field type="text" name="age" placeholder="age" />
        {touched.age && errors.age && <p className="error">{errors.age}</p>}
        
        <Field type="text" name="height" placeholder="height" />
        {touched.height && errors.height && <p className="error">{errors.height}</p>}



        <button type="submit">Submit!</button>
      </Form>

      {props.smurfs.map(smurf => (
        <p key={smurf.id}>{smurf.name}</p>
      ))}
    </div>
  );
};

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, age, height, }) {
    return {
      name: name || '',
      age: age || '',
      height: height || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name required'),
    age: Yup.string().required("Age required"),
    height: Yup.string().required("Height required")
  }),

  handleSubmit (payload, {props, dispatch,  setStatus })  {
    console.log("props", props)
    props.postData(payload);
    // setStatus(props.postData)
    setStatus(postData(props.dispatch));
  }
})(SmurfForm);

const mapStateToProps = state => {
  return { 
  smurfs: state.smurfs
 } 
}





// handleSubmit (values, dispatch, { setStatus })  {
//   dispatch({type: POST_SMURF_DATA_START })
// //  console.log("d",dispatch)
// //  console.log("values",values)
// //  console.log("status",setStatus)   
// axios
//     .post('http://localhost:3333/smurfs', values)
//     .then(res => {
//         console.log("Post Smurfs", res.data)
//         // dispatch({type: POST_SMURF_DATA_SUCCESS, payload: res.data})
//       setStatus(res.data);
//     })
//     .catch(err => console.log(err.response));
// }
// })(SmurfForm);
// handleSubmit(values, {props, setSubmitting}) {
//     setSubmittingHigher = setSubmitting;

// const mapStateToProps = (state) => {
// return {
//     name: 
// }
// };

// const mapDispatchToProps = dispatch => ({
// addMyProduct: (params) => dispatch(addProduct(params))
// });





export default connect(mapStateToProps, {postData})(FormikSmurfForm);

