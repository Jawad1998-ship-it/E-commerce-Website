import styled from "styled-components";

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), 
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") top center;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden ;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    box-shadow: 20px 20px 50px grey;
    border-radius: 2rem;
`;
const Form = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
    margin:0.6rem;
    font-weight:700;
`
const Input = styled.input`
    width:50%;
    padding:1rem;
    border-radius:1rem ;
    border:1px solid teal;
    margin: .5rem;
    font-weight:900;
`
const Agreement = styled.span`
    font-size:15px;
    margin: 1rem 1rem;
    font-weight:900;
    height:inherit;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin: 1rem 0.5rem;
    border-radius:2rem;
`

export const Register = () => {

    return (
        <Container>
            <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder="name"></Input>
                <Input placeholder="last name"></Input>
                <Input placeholder="username"></Input>
                <Input placeholder="email"></Input>
                <Input placeholder="password"></Input>
                <Input placeholder="confirm password"></Input>
                <Agreement>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, veniam fugit numquam rem aspernatur dolore architecto cupiditate harum quam tempora laboriosam accusamus debitis assumenda rerum ducimus at similique? Velit, porro!</Agreement>
                <Button>Create</Button>
            </Form>
            </Wrapper>
        </Container>
    );
};
