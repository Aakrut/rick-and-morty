import axios from "axios";
import { useState } from "react"
import { Container, LocationD, LocationCard, LocationDimension, LocationName, LocationType } from './LocationElements'
import { Link } from 'react-router-dom';

const Location = () => {

    const [location, setLocation] = useState([]);

    useState(() => {
        axios.get('https://rickandmortyapi.com/api/location').then((res) => {
            setLocation(res.data.results)
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
            <Container>
                <LocationCard>
                    {
                        location.map((item) => {
                            return (
                                <LocationD key={item.id}>
                                    <Link to={`/location/${item.id}`}>
                                    
                                    <LocationName>
                                        {
                                            item.name
                                        }
                                    </LocationName>

                                    <LocationType>
                                        {
                                            item.type
                                            }
                                    </LocationType>

                                    <LocationDimension>
                                        {
                                            item.dimension
                                        }
                                    </LocationDimension>
                                    </Link>
                                </LocationD>
                            )
                        })
                    }
                    </LocationCard>
            </Container>
           
        </>
    )
}

export default Location
