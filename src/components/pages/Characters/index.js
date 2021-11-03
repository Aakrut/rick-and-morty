import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Container,Character,Name,Status,Gender,Species,Location,Image,Detail } from "./CharacterElements";

const Characters = () => {

    const [chracters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((result) => {
            setCharacters(result.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }, []);


    return (
        <>
            <Container>

            
            {
                chracters.map((item) => {
                    return (
                        <Character key={item.id} >
                            
                            <Link to={`${`/characters/${item.id}`}`}>
                                
                            <Detail>

                                
                            
                            <Name>{ item.name}</Name>
                            
                            
                            <Status>Status : {item.status}</Status>
                            <Gender>Gender : {item.gender}</Gender>
                            <Species>
                             Species : {
                                    item.species
                                }
                                    </Species>
                                    
                            
                            </Detail>

                                
                                    
                                    
                                <Image src={item.image} alt={item.name} />
                                   
                                
                            </Link>

                        </Character>
                    )
                })
                    
                }
                
            </Container>    
        </>
    )
}

export default Characters
