import styled from "styled-components"
import {popularProducts} from '../data'
import {Product} from './Product'

const Container = styled.div`
    padding:20px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr ;
`;

export const Products = () => {

    return <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
    </Container>;

};
