import {TextField} from '@mui/material';

function Name({changeName}) {

    const NameHandler = (event) => {
    	changeName(event.target.value);
  	}

    return(
        <TextField 
            id="standard-basic" 
            label="Name" 
            multiline 
            onChange={NameHandler}
        />
    )
}

export default Name
