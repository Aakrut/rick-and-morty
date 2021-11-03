import axios from "axios";
import { useEffect,useState } from "react"
import { useParams } from "react-router";
import { Container,CharcaterSection,Image,Details,Name,Status,Species,Gender,Origin,RecentLocation } from "./CharacterDetailElements";

const CharacterDetail = () => {

    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getCharacter = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(response.data)
            
        }
        getCharacter()
    }, [id]);

    return (
        <>
            
            <Container>

                <CharcaterSection>
                    <Image src={character.image} alt={character.name}>

                    </Image>

                    <Details>
                        <Name>
                            Name : {
                                character.name
                            }
                        </Name>

                        <Status>
                            Status : {
                                character.status
                                }    
                        </Status>

                        <Species>
                            Species : {
                                character.species
                                }    
                        </Species>

                        <Gender>
                            Gender : {
                                character.gender
                                }    
                        </Gender>

                        


                    </Details>
                </CharcaterSection>


               

            </Container>
            
        </>
    )
}

export default CharacterDetail
