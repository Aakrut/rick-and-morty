import styled from "styled-components";

export const Section = styled.section`
height: 80vh;
`

export const Container = styled.div`
height: 100%;
max-width: 1200px;
margin: 0 auto;
display: flex;
align-items: center;

`

export const QuoteCard = styled.div`
padding: 30px;
position: relative;
max-width: 600px;
margin: 0 auto;
background:  #1E1E1E;
border-radius: 20px;
`
export const Quote = styled.div`
font-family: 'Lato',sans-serif;
color: #7AFF74;

@media screen and (max-width:400px){
    
}
`

export const Character = styled.div`
position: absolute;
right: 0;
margin-top: 20px;
margin-right: 30px;
color: white;
font-family: 'Lato', sans-serif;
background: #111;
padding: 2px;
border-radius: 5px;
`
