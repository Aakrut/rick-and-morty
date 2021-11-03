import styled from "styled-components"
import {Link} from 'react-router-dom'

export const NavbarMain = styled.section`
height: 75px;
border-bottom: 1px solid #f1f1f1;
z-index: 10;
position: sticky;
top: 0;
background: #111111 ;
`

export const NavbarContainer = styled.div`
height: 100%;
max-width: 1200px;
display: flex;
justify-content: space-between;
margin: 0 auto;
align-items: center;

`

export const Logo = styled.img`
height: 40px;
width: 40px;
margin-left: 20px;
transition: all 0.25s ease-in-out infinte;
cursor: pointer;

&:hover{
    transform: rotate(360deg) ;
}
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width:964px){
    display: block;
    
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    margin: 0 10px;
    
}
`

export const ListItems = styled.ul`
list-style-type: none;
display: flex;
margin-right: 20px;

@media screen and (max-width:964px){
    display: none;
}

`

export const LinkItem = styled(Link)`
list-style: none;
margin: 0 0 0 10px ;
color: white;
text-decoration: none;
font-family: 'Lato',sans-serif;

&:hover{
    color: #7AFF74;
}
`

export const MainLogo = styled(Link)`

`