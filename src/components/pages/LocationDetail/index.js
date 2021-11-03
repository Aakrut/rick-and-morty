import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import {Container,LocationName,LocationDimension,LocationType,LocationCard} from './LocationDetailElements'

const LocationDetail = () => {

    const { id } = useParams();

    const [location, setLocation] = useState({});


    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((res) => {
            setLocation(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [id]);

    return (
        <>
            

            <Container>

                <LocationCard>
                    
            

                <LocationName>
                    
           Location :  {
                location.name
            }
            </LocationName>

                <LocationType>
                    
                
            Type : {
                location.type
            }
                </LocationType>

                <LocationDimension>

                
            Dimension : {
                location.dimension
            }
            </LocationDimension>

            </LocationCard>
            </Container>
        </>
    )
}

export default LocationDetail
