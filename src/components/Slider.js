import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import {sliderItems} from '../data.js'
import {mobile} from '../responsive'

    const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        overflow: hidden;
        position: relative;
        ${mobile({ display: "none" })}
    `;

    const Arrow = styled.div`
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: ${(props) => props.direction === "left" && "10px"};
        right: ${(props) => props.direction === "right" && "10px"};
        bottom: 7.5rem;
        margin: auto;
        cursor:pointer;
        opacity:0.8 ;
        z-index:2;
    `;

    const Wrapper = styled.div`
        height:100%;
        display:flex;
        transition: all 1s ease;
        transform:translateX(${props => props.slideIndex * -100}vw);
    `

    const Slide = styled.div`
        width:100vw;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: #${props => props.bg} ;
        flex:1;
    ` 
    const ImgContainer = styled.div`
        margin-bottom: 6rem;
    `

    const Image = styled.img`
        max-height:70vh;
        border-radius:10rem;
    `

    const InfoContainer = styled.div`
        padding:50px;
        height:100vh;
        margin-top:10rem;
    `
    const Title = styled.h1`
        font-size:3.5rem;
    `
    const Desc = styled.p`
        margin: 30px 0;
        font-size:20px;
        font-weight:600;
    `
    const Button = styled.button`   
        padding:10px;
        font-size:2rem;
        background-color: transparent;
        cursor:pointer;
    `
export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left")
        {
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2 )
        }
        else
        {   
            setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0 )
        }
}
    return (

        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>

                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>

    );
}
