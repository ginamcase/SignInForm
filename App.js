import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};
      if(!values.password) errors.password = 'Field required';

      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
        }
          return errors;
      }
  });

  return (
    <div>
      <p>
      <form onSubmit={formik.handleSubmit}>
      <div>Email:</div>
        <input type="email" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}     

      <div>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                

      <button id="submitBtn" type="submit">Submit</button>
      </form>      

      </p>
    </div>
  );
}

export default App;
