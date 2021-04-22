import React, {useState} from 'react';

import TextField from '../../components/inputs/textField';
import ChipField from '../../components/inputs/chipField';

export default function CreateBot(){
    return <>
        <div>creating bot</div>
        <TextField label={"Name"} value={"{make it good...}"} />
        <TextField label={"Tags"} value={"tags"} />
        <TextField label={"Description"} value={"info"} />
        <ChipField />
    </>
}