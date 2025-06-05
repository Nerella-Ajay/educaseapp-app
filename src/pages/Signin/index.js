import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { Button, Container, FormGroup, InputField, Label, Subtitle, Title } from './StyledComponents';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(); //used for move to next page

    const handleSubmit = () => {
        toast.success('Registration successful! Please login.');
        navigate('/Account') //used for navigate to user account page
    }

    const isFormValid = email.trim() !== '' && password.trim() !== ''; // here I used this for checking the password and email is valid or not

    return (
        <Container>
            <ToastContainer position='top-right' />
            <div style={{width: '100%', maxWidth: 400}} >
                <Title>Signin to your PopX account</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Subtitle>
                <FormGroup>
                    <Label>Email Address</Label>
                    <InputField type='email' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />

                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <InputField type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                <Button onClick={handleSubmit} disabled={!isFormValid} valid={isFormValid}>Login</Button>
            </div>
        </Container>
    )
}

export default Signin