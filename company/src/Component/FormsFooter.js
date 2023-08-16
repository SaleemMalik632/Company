import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';




export default function HelperTextMisaligned() {
    const firstname = React.useRef();
    const lastName = React.useRef();
    const Email = React.useRef();
    const Message = React.useRef();
    function Submission() {
        firstname.current.style.color= 'red';
    }


    return (
        <div style={{ width: '30%', margin: '10px' }}>
            <h3>Contact us</h3>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <TextField type='text' style={{ marginBottom: '10px' }} label="First Name" inputRef={firstname} required />
                <TextField type='text' style={{ marginBottom: '10px' }} label="Last Name"  inputRef={lastName} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField type='email' style={{ marginBottom: '10px', width: '100%' }} inputRef={Email} label="Email" required />
                <TextField multiline rows={4} style={{ marginBottom: '10px', width: '100%' }} inputRef={Message} label="Message" required />
                <Button variant="contained" color="primary" type='submit' onClick={Submission}>Submit</Button>
            </div> 
        </div>
    );
}
