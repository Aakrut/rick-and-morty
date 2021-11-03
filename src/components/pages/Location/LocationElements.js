import styled from "styled-components";

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`


export const LocationCard = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;
margin: 10px 10px;

@media screen and (max-width:500px){
    grid-template-columns: repeat(2,1fr);
}

`

export const LocationD = styled.div`
background:  #1E1E1E;
border-radius: 20px;
text-align: center;

& a{
    text-decoration: none;
}
`

export const LocationName = styled.h2`
font-family: 'Lato';
color: #7AFF74;
`

export const LocationType = styled.h4`
font-family: 'Lato';
color: #fff;
`

export const LocationDimension = styled.p`
font-family: 'Lato';
color: #4699EB;
`