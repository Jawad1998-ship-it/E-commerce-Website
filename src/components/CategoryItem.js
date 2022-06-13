import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    ${mobile({ height: "30vh", })}
`;

const Info = styled.div`
    position:absolute;
    top:1rem;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:0;
`

const Title = styled.h1`
    color:white;
    margin-top:8rem;
`

const Button = styled.button`
    font-size:1rem;
    padding:0.9rem;
    border-radius:1rem ;
    border:none;
    font-weight:900;
    background-color: white;
    color:gray;
    margin-top:1rem;
    cursor:pointer;
`

export const CategoryItem = ({item}) => {
    return (

        <Container>
            <Image src={item.img} />
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>SHOP NOW !</Button>
            </Info>
        </Container>

    )
}
