import {TextField} from '@mui/material';

function Surname({changeSurname}) {

    const SurnameHandler = (event) => {
    	changeSurname(event.target.value);
  	}

    return(
        <TextField 
            id="standard-basic" 
            label="Surname" 
            multiline 
            onChange={SurnameHandler}
        />
    )
}

export default Surname
