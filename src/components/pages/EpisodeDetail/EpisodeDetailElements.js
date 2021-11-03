import styled from "styled-components"


export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`


export const EpisodeCard = styled.div`
background: #1E1E1E;
box-shadow: 0 0 6px 0 rgba(20,20,20,0.5);
transition: all 0.25s ease-in-out;
cursor: pointer;
padding: 30px;
border-radius: 20px;


&:hover{
    transform: translate(0,-10%);
}
`

export const EpisodeName = styled.h2`
font-family: 'Lato'sans-serif;
color: #7AFF74;
`



export const EpisodeDate = styled.h3`
font-family: 'Lato'sans-serif;
color: #4699EB;
`