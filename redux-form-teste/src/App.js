import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux'


const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

function App(props) {
  const [title, setTitle] = useState('');

  const submitForm = (values) =>{
    
    setTitle(values.teste)    
  }

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

      <h1>{title}</h1>
      <form onSubmit={props.handleSubmit(submitForm)}>
        <Field 
          component={renderTextField}
          label={'Teste'}
          type="text"
          name="teste"
          id="teste"
        />

        <button type="submit"> Submit </button>
      </form>

    </div>
  );
}

const TestRedux = connect(null,null)(reduxForm({form: 'teste'})(App))


export default TestRedux;


