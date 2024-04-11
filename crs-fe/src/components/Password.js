import {TextField} from '@mui/material';

function Password({changePassword}) {

    const PasswordHandler = (event) => {
    	changePassword(event.target.value);
  	}

    return(
        <TextField 
            id="standard-basic" 
            label="Password" 
            multiline 
            onChange={PasswordHandler}
        />
    )
}

export default Password
