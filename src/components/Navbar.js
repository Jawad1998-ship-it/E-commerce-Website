import React from 'react'
import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {mobile} from '../responsive.js'


    const Container = styled.div`

        height:auto;
        font-weight:700;
        ${mobile({height:"50px"})}
    `

    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${mobile({ display: "block"})}
    `;
    
    const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
    `;
    
    const Center = styled.div`
      flex: 1;
      text-align: center;
    `;
    
        
    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ${mobile({ display: "flex",flexDirection:"column",margin:"40px", })}
    `;
    
    const Language = styled.span`
        font-size: 1rem;
        cursor: pointer;
        ${mobile({ display: "none" })}
    `

    const SearchContainer = styled.div`
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4rem;

    `;

    const Input = styled.input`
      position: relative;
      border: 1px solid black;
      outline: none;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.3rem 1rem;
      border-radius: 22px;
      ${mobile({display:"block"})}
    `;

    const Logo = styled.h1`
      font-weight: bold;
      font-size: 2rem;
      ${mobile({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"30px"
      })}
    `;
    const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
      ${mobile({ margin: "60px" })}
    `;

export const Navbar = () => {

        return (
          <Container>
            <Wrapper>
              <Left>
                <Language>EN</Language>
                <SearchContainer>
                  <Input placeholder="Search" className='input' />                  
                  <SearchIcon className="search" />
                </SearchContainer>
              </Left>
              <Center>
                <Logo> Ellion's Collection </Logo>
              </Center>
              <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </MenuItem>
              </Right>
            </Wrapper>
          </Container>
        );
}
