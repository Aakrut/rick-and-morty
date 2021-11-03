import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 10px;


@media screen and (max-width:965px){
    grid-template-columns: repeat(3,1fr);
    grid-gap: 0;
}

@media screen and (max-width:650px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 0;

}

@media screen and (max-width:400px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 0;
}

`

export const Character = styled.div`
max-width:100%;
height: 420px;
margin: 20px 20px;
border-radius: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;
background:  #1E1E1E;


& a{
    text-decoration: none;
}
`

export const Name = styled.h6`
color: #7AFF74;
margin: 0 auto;
text-decoration: none;
font-family: 'Lato',sans-serif;
font-size: 20px;


`

export const Status = styled.p`
color: white;
text-decoration: none;
font-family: 'Lato',sans-serif;
`

export const Gender = styled.p`
color: white;
text-decoration: none;
font-family: 'Lato',sans-serif;
`

export const Species = styled.p`
color: #4699EB;
text-decoration: none;
font-family: 'Lato',sans-serif;
`

export const Location = styled.h6`
color: white;
text-decoration: none;
font-family: 'Lato',sans-serif;
font-size: 0.8rem;
`


export const Image = styled.img`
max-width: 150px;
height: 150px;
border-radius: 20px;

`

export const Detail = styled.div`

padding: 30px;
max-width: 100%;
border-radius: 30px;
`

