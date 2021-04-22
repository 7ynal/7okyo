import React, {useState} from 'react';
import {TextField as MUITextField} from '@material-ui/core';

interface Props{
    label:string;
    value:string;
}

export default function TextField(props:Props){
    const [value, setValue] = useState('Controlled');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <>
        <MUITextField
            id="outlined-multiline-flexible"
            label={props.label}
            multiline
            rowsMax={4}
            value={props.value}
            onChange={handleChange}
            variant="outlined"
        />
    </>
}