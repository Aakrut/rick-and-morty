import styled from "styled-components";




export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
`

export const CharcaterSection = styled.div`
width: 650px ;
height: fit-content;
display: flex;
border-radius: 20px ;
background: #1E1E1E;
box-shadow: 0 0 6px 0 rgba(20,20,20,0.5);
transition: all 0.25s ease-in-out;
cursor: pointer;


&:hover{
    transform: translate(0,-10%);
    
}


@media screen and (max-width:600px){
    flex-direction: column;
    width: 250px;
    height: fit-content;

}
`

export const Details = styled.div`
display: flex;
flex-direction: column;
margin: 10px 20px;

`

export const Image = styled.img`
border-radius: 20px 0 0 20px;

@media screen and (max-width:600px){
    border-radius: 20px 20px 0 0;
}
`

export const Name = styled.h2`
font-family: 'Lato';
color: #7AFF74;
`

export const Status = styled.h4`
font-family: 'Lato';
color: #fff;
`

export const Species = styled.h4`
font-family: 'Lato';
color: #7AFF74;
`
export const Gender = styled.p`
font-family: 'Lato';
color: #4699EB;
`

export const Origin = styled.h5`

`
export const RecentLocation = styled.p`

`

