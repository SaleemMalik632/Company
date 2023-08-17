import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function HelperTextMisaligned() {

    const firstname = React.useRef();
    const lastName = React.useRef();
    const Email = React.useRef();
    const Message = React.useRef();

    async function Submission(event) {
        event.preventDefault();
        const Data = {
            FName: firstname.current.value,
            LName: lastName.current.value,
            Email: Email.current.value,
            Message: Message.current.value,
        }
        try {
            if (firstname.current.value !== '' && lastName.current.value !== '' && Email.current.value !== '' && Message.current.value !== '') {
                const response = await fetch('http://localhost:8000/SaveData', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Data) });
                if (response.ok) {
                    toast.success('Thank you for contact us',
                        {
                            autoClose: 2000,
                            hideProgressBar: true,
                        }
                    );
                    firstname.current.value = '';
                    lastName.current.value = '';
                    Email.current.value = '';
                    Message.current.value = '';

                } else {
                    toast.error('error ');
                }
            } else {
                toast.error('Please Fill All  the Inputs')
            }
        } catch (err) {
            toast.error('Error in the DataBase Connection')
        }
    }


    return (
        <form>
            <ToastContainer />
            <div style={{margin: '10px' }}>
                <h3>Contact us</h3>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <TextField type='text' label="First Name" inputRef={firstname} required />
                    <TextField type='text' style={{ margin:'10px',marginTop:'0px'}} label="Last Name" inputRef={lastName} required />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField type='email' style={{ marginBottom: '10px', width: '100%' }} inputRef={Email} label="Email" required />
                    <TextField multiline rows={4} style={{ marginBottom: '10px', width: '100%' }} inputRef={Message} label="Message" required />
                    <Button variant="contained" color="primary" type="submit" onClick={Submission}>
                        Submit
                    </Button>
                </div>
            </div>
        </form>

    );
}
