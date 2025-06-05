import { useNavigate } from "react-router";
import {
    Button,
    Container,
    Subtitle,
    Title
} from './StyledComponents';

const WelcomeScreen = () => {
    const navigate = useNavigate(); //useNavigate is for move to next page
    return (
        <Container>
            <div style={{width: '100%', maxWidth: 400}}>
                <Title>
                    Welcome to PopX
                </Title>
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </Subtitle>
                <Button onClick={()=> navigate('/Signup')} valid>
                    Create Account
                </Button>
                <Button onClick={() => navigate('/Signin')} valid={false}>Already Registered? Login</Button>

            </div>
        </Container>
    )
}

export default WelcomeScreen;