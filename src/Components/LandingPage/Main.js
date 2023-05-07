
import {Text, useMantineTheme, createStyles, Card, Group, Blockquote, Button, Grid, SimpleGrid} from "@mantine/core"
import AnimatedHeader from "./AnimatedText"
import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useWindowScroll } from "@mantine/hooks";
export default function Main(){
  const links = [{text: "Kdo jsem?", href: "/services"}, {text: "Co nabízím?", href: "/services"}, {text: "Moje tvorba", href: "/contact"}, {text: "Blog", href: "/contact"}, {text: "Kontakt", href: "/contact"}]
    var theme = useMantineTheme();
    const { scrollY } = useViewportScroll();
    const [scroll, scrollTo] = useWindowScroll();
  // Interpolate the position of the image based on the scroll position
  const x = useTransform(scrollY, [0, 0], ["0%", "0%"]);
  const y = useTransform(scrollY, [0, 200], ["0%", "120%"]);

    return(
      <div style={{width: "100%", minHeight: "70vh", display: "block", overflow: "hidden"}}>
  
          <div style={{backgroundColor: theme.colors.cyan[5], paddingTop: "8vh", display: "flex", paddingLeft: "3vw"}}>
          
            <AnimatedHeader text="Oživ svůj digitální svět s neodolatelným webem." />
            <div style={{ width: "50%", minHeight: "10%", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "5vh", paddingLeft: "4vw", paddingTop: "1vh" }}>
            <video autoPlay muted loop style={{ width: "70%", height: "90%", objectFit: "cover", zIndex: "1", right: "7%", top: "3%", borderRadius: "240px"}} src={"/videos/bckground.mp4"} />
            <div style={{position: "absolute", zIndex: 150}}>
                {links.map((link, index) => {
                  const [hover, setHover] = useState(false)
                    return( <Text sx={{ cursor: "pointer", whiteSpace: "nowrap",  transition: "all 0.5s ease-in-out"}} onMouseEnter={()=> {setHover(true)}} onMouseLeave={()=> {setHover(false)}} size={"4vw"} weight="bold" color={hover ? "#fff" :"#3e3e3e" }onClick={() => scrollTo(link.href)}><Text color="white" sx={{ transition: "all 0.5s ease-in-out"}} size={hover ? "2vw" : "sm"} component="span">{index +1}</Text><Text color="white" size={"lg"} component="span">/</Text> {link.text}</Text>)
                })}
            </div>
            <motion.div style={{ position: "absolute", x, y, transition: "all 0.5s ease-in-out", alignSelf: "flex-end"}}>
   
      </motion.div>
      </div>
     
        </div>
      
      </div>
    )
}
/*
     {scroll.y < 750 ? <Card sx={{backgroundColor: "transparent",}}><Card.Section><Image src={YourPhoto} width={600} height={600} alt="Your photo" /></Card.Section></Card> : <Card>
     <Card.Section>   <Image src={YourPhoto} width={600} height={600} alt="Your photo" /></Card.Section>
       
            <Group position="apart" sx={{marginTop: "1vh", padding: "0 1vw"}}>
                <Text size="xl" weight="bold" color="#4d4d4d">Ondřej Zaplatílek</Text>
                <Text size="md" weight="bold" color="#4d4d4d">Web Developer</Text>
            </Group>
    <Card.Section>
    <Blockquote color="cyan" sx={{maxWidth: "20vw"}}>
       Tvorba mě vždy bavila, ať už to bylo cokoli. Na základní škole,
jsem udělal svůj první web a "hru".
Nyní studuji 3. rokem IT se zaměřením na Kybernetickou bezpečnost a
dokážu vám vytvořit aplikace, které jsou nejen funkční, ale i bezpečné
       </Blockquote>
    </Card.Section>
    <Card.Section sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Button color="blue" variant="outline" sx={{width: "80%", marginBottom: "2vh"}}>Více o mě</Button>
    </Card.Section>
        </Card>}
*/
/*  */ 