import styled from 'styled-components'
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt"
import PhoneIcon from "@mui/icons-material/Phone"
import MailIcon from "@mui/icons-material/Mail"
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}
`;

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0;
`

const Title = styled.h3`
    margin-bottom:30px;
    font-weight:bold;
`
const ListItem = styled.li`
    width:50%;
    font-weight:600;
    margin-bottom:10px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color:white;
    background-color: #${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
    font-weight:600;
`

const Payment = styled.img`
    width:70%;
    cursor:pointer;
`

export const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Elliotte</Logo>
          <Desc>There are so many variations of collections available</Desc>
          <SocialContainer>
            <SocialIcon color="385999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <InstagramIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wish List</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <AddLocationAltIcon style={{ marginRight: "10px" }} /> Dixie Path
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: "10px" }} />
            +1 246 45 44
          </ContactItem>
          <ContactItem>
            <MailIcon style={{ marginRight: "10px" }} />
            contact@jawad.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
}
