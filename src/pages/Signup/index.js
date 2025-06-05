import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {
    Button,
    Container,
    FormGroup,
    InputField,
    Label,
    RadioGroup,
    Title
} from './StyledComponents';

const Signup = () => {
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: '',
    }); // useState is to update the date of the user when creating account

    const navigate = useNavigate(); //used to navigate to next page

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    } //this function is for change the data when created an user account and back to normal page which is like we seen before creating an user account

    const handleSubmit = () => {
        toast.success('Registration successfull! Please login.');
        navigate('/Signin'); // used to move the page to signin page 
    }

    const isFormValid = form.fullName && form.phone && form.email && form.password && form.isAgency; //used to check the form is valid or not by checking the name, phone number, email, password and agency

    return (
        <>
            <ToastContainer position='top-right' />
            <Container>
                <div style={{width: '100%', maxWidth: 400}}>
                    <Title>
                        Create your PopX account
                    </Title>
                    
                    <FormGroup>
                        <Label>
                            Full Name<span style={{color: 'red'}}>
                                *
                            </span>
                        </Label>
                        <InputField name='fullName' value={form.fullName} onChange={handleChange} placeholder='Enter your name' type='text' />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Phone number<span style={{color: 'red'}}>
                                *
                            </span>
                        </Label>
                        <InputField name='phone' value={form.phone} onChange={handleChange} placeholder='Enter your phone number' type='tel' />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Email address<span style={{color: 'red'}}>
                                *
                            </span>
                        </Label>
                        <InputField name='email' value={form.email} onChange={handleChange} placeholder='Enter your email' type='email' />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Password<span style={{color: 'red'}}>
                                *
                            </span>
                        </Label>
                        <InputField name='password' type='password' value={form.password} onChange={handleChange} placeholder='Enter your password' />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Company name
                        </Label>
                        <InputField name='company' value={form.company} onChange={handleChange} placeholder='Enter company name' type='text' />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Are you an Agency? <span style={{color:'red'}}>
                                *
                            </span>
                        </Label>
                    <RadioGroup>
                            <label>
                                <input type='radio' name='isAgency' value='yes' checked={form.isAgency === 'yes'} onChange={handleChange} />
                                <span>
                                    Yes
                                </span>
                            </label>
                            <label>
                                <input type='radio' name='isAgency' value='no' checked={form.isAgency === 'no'} onChange={handleChange} />
                                <span>
                                    No
                                </span>
                            </label>
                        </RadioGroup>
                    </FormGroup>

                    
                </div>
                <div>
                    <Button onClick={handleSubmit} disabled={!isFormValid} valid={isFormValid}>
                        Create Account
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Signup;