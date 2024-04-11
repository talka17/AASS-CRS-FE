import {TextField} from '@mui/material';

function Username({changeUsername}) {

    const UsernameHandler = (event) => {
    	changeUsername(event.target.value);
  	}

    return(
        <TextField 
            id="standard-basic" 
            label="Username" 
            multiline 
            onChange={UsernameHandler}
        />
    )
}

export default Username