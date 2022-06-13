import styled from 'styled-components'

export const Announcement = () => {


    const Container = styled.div`
            height:30px;
            background-color: teal ;
            color:white;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:1.5rem;
            font-weight:600;
    `

    return (
        <Container>
            Super deal!
        </Container>
    )
}

