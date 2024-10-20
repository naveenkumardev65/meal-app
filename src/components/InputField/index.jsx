import React from "react";
import TextField from '@mui/material/TextField';

function InputField(props) {
    console.log('props', props);
    const { input, meta } = props;
    
  return <div>
    <TextField 
      name={input.name}
      onChange={input.onChange}
      id={input.name} 
      label={input.name} 
      variant="standard" />
  </div>;
}

export default InputField;
