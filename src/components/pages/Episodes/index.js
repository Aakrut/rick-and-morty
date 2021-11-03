import axios from "axios";
import { useEffect, useState } from "react"
import { Container, Episode, EpisodeName, AiredDate, EpisodeNumber, EpisodeCard } from './EpisodesElements'
import { Link } from 'react-router-dom'

const Episodes = () => {


    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode').then((res) => {
            setEpisodes(res.data.results)
        }).catch((error) => {
           console.log(error);
       })

    }, []);


    return (
        <>
            <Container>
                <EpisodeCard>

                
                    {
                        episodes.map((item) => {
                            return (
                                <Episode key={item.id}>
                                    <Link to={`/episode/${item.id}`}>
                                    <EpisodeName>
                                        {
                                            item.name
                                        }
                                    </EpisodeName>
                                    
                                    <AiredDate>
                                        {
                                            item.air_date
                                        }
                                    </AiredDate>

                                    <EpisodeNumber>
                                        {
                                            item.episode
                                        }
                                    </EpisodeNumber>
                                    </Link>
                                </Episode>    
                            )
                        })
                    }
                </EpisodeCard>
           </Container>
        </>
    )
}

export default Episodes
