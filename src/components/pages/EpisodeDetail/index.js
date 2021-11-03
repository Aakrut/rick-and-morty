import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import {Container,EpisodeCard,EpisodeName,EpisodeDate} from './EpisodeDetailElements'

const EpisodeDetail = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState({});

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then((res) => {
            setEpisode(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [id]);


    return (
        <>
            
            <Container>

            
                <EpisodeCard>
                    
                    <EpisodeName>
                     Episode Name :   {
                episode.name
                    }            
                    </EpisodeName>

                    <EpisodeDate>
    
                    Release Date :  
                {
                episode.air_date
                }

                </EpisodeDate>

                </EpisodeCard>
            </Container>    
        </>
    )
}

export default EpisodeDetail