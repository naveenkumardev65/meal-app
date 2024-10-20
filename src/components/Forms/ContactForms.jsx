import React from 'react'
import { Field, reduxForm } from 'redux-form';
import InputField from '../InputField';
import { Button } from '@mui/material';

let ContactForm = props => {
  const { handleSubmit } = props;

  console.log('props 11', props);
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={InputField} type="text" required />
      </div>
      <div>
        <Field name="lastName" component={InputField} type="text" required />
      </div>
      <div>
        <Field name="email" component={InputField} type="email" required />
      </div>
      <div style={{ marginTop: '10px'}}>
        <Button 
          disabled={props?.pristine}
          type="submit"
          variant="contained" 
          color="primary">Submit</Button>
      </div>
      
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm