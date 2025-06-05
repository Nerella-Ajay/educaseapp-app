import { FaCamera } from 'react-icons/fa'
import { Avatar, AvatarWrapper, CameraIcon, Container, Description, Divider, ProfileSection, Title, UserDetails } from './StyledComponents'

const AccountSettings = () => {
    return (
        <Container>
            <div style={{width: '100%', maxWidth: 400}}>
                <Title>
                    Account Settings
                </Title>
                <Divider />
                <ProfileSection>
                    <AvatarWrapper>
                        <Avatar src='https://randomuser.me/api/portraits/women/68.jpg' alt='Profile' />
                        <CameraIcon><FaCamera size={12}/></CameraIcon>
                    </AvatarWrapper>
                    <UserDetails>
                        <strong>
                            Marry Doe
                        </strong>
                        <p>
                            Marry@Gmail.Com
                        </p>
                    </UserDetails>
                </ProfileSection>

                <Description>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </Description>

                <Divider />

                <Divider style={{marginTop: '60vh'}} />
            </div>
        </Container>
    )
}

export default AccountSettings