import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {mobile} from '../responsive'

const Container = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
    font-weight:900;
`
const Desc = styled.p`
    margin: 20px 0px;
    font-weight:600;
`


const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display:flex;
    align-items:center ;
`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:600;
`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props => props.color};
    margin: 25px 5px;
    cursor:pointer;
`

const FilterSize = styled.select`
    margin-left:20px;
    padding: 4px;
    font-weight:600;
`

const FilterSizeOption = styled.option`
    font-weight:600;
`

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px ;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center ;
    margin: 0px 5px;
    font-size:1.5rem;
`

const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    font-weight:600;
    cursor:pointer;

    &:hover
    {
      background-color:#f9f1f1;
    }
`

export const Product = () => {

    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem
              tenetur nulla aperiam nihil. Labore sapiente nam suscipit et
              perferendis molestiae ut dolorem sequi? Non nulla repellat
              architecto quis molestiae.
            </Desc>
            <Price>$20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <AddIcon />
                    <Amount>1</Amount>
                    <RemoveIcon />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    );
}
