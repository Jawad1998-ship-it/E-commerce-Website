import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      top center;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: 20px 20px 50px grey;
  border-radius: 2rem;
  ${mobile({ width: "75%" })}
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 0.6rem;
  font-weight: 700;
`;
const Input = styled.input`
  min-width: 40%;
  padding: 10px ;
  border-radius: 1rem;
  border: 1px solid teal;
  margin: 10px 0;
  font-weight: 900;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 1rem 0.5rem;
  border-radius: 2rem;
  margin-bottom:10px;
  margin-left:1px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size:12px;
  text-decoration:underline;
  cursor:pointer;
`


export const Login = () => {
    return (
      <Container>
        <Wrapper>
          <Title></Title>
          <Form>
            <Input placeholder="username"></Input>
            <Input placeholder="password"></Input>
            <Button>LOGIN</Button>
            <Link>Forgot password?</Link>
            <Link>Create a new account</Link>
          </Form>
        </Wrapper>
      </Container>
    );
}
