import { useState } from 'react'
import { Section, Container,QuoteCard,Quote,Character } from './HeroContainerElements'
import data from '../../data'

const HeroContainer = () => {

    const [quote] = useState(data);

   
    const randomquote = Math.floor(Math.random() * quote.length);
           

    return (
        <>
            <Section>
                <Container>
                    
                    <QuoteCard>

                        <Quote>
                            {
                                data[randomquote].quote
                            }
                        </Quote>
                        
                        <Character>
                           - {
                                data[randomquote]
                                .character
                                }
                        </Character>

                    </QuoteCard>
                </Container>
            </Section>
        </>
    )
}
export default HeroContainer