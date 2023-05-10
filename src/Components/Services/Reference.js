import { Carousel } from '@mantine/carousel';
import { Blockquote, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

const reviews = [
    {name: "Michaela Humešová", job: "podnikatelka", org: "Polystyren sypaný Richard Humeš", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.", web: "https://www.humesova.cz", href: "https://www.humesova.cz"},
    {name: "Petr Špaček", job: "podnikatel"}
]

export default function Reference(){

    function ReferenceSlide({name, job, org, text, web, href}){
        const theme = useMantineTheme()
        return(
            <Carousel.Slide>
            <Blockquote color='cyan' cite={<div><Text size={"xl"}>{name + ", " + job}</Text> <Text>{org}</Text> {href ? <Link href={href}><Text color='cyan' size={"xl"}>{web}</Text></Link> : <Text color='cyan' size={"xl"}>{web}</Text>}</div>}>
                <Text color={theme.colors.cyan[8]} size={"2vw"}>{text}</Text>
            </Blockquote>
            </Carousel.Slide>
        )
    }

    return(
        <Carousel sx={{maxWidth: "90%"}} slideSize="70%" height="30vh" slideGap="xl" loop withIndicators>
            {reviews.map((review) => {
                return <ReferenceSlide {...review} />
            })}
        </Carousel>
    )
}