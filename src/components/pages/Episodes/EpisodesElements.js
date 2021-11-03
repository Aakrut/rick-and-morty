import styled from "styled-components"


export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`

export const Episode = styled.div`
background:  #1E1E1E;
border-radius: 20px;
text-align: center;

& a {
    text-decoration: none;
}
`

export const EpisodeName = styled.h2`
font-family: 'Lato';
color: #7AFF74;
`

export const AiredDate = styled.h4`
font-family: 'Lato';
color: #fff;
`

export const EpisodeNumber = styled.p`
font-family: 'Lato';
color: #4699EB;
`

export const EpisodeCard = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;
margin: 10px 10px;

@media screen and (max-width:600px){
    grid-template-columns: repeat(2,1fr);
    
}
`