import { Blockquote, Button, Card, Flex, Grid, Group, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";
import YourPhoto from "../../../public/images/profile.jpg"; // Replace with the correct path to your photo
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from 'framer-motion';
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";
import OutlineText from "../UI/OutlinedText";

export default function MyPeople({we, mobile}) {
    const gridVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 5, type: 'spring', stiffness: 50 } },
      };
      
        const router = useRouter();
        const [scroll, scrollTo] = useWindowScroll();
          const { y } = scroll;
        const [startAnimation, setStartAnimation] = useState(false);
        const controls = useAnimation();
      
        useEffect(() => {
          if (y > 200) { // Adjust this value to control when the animation starts
              console.log(y + "is bigger than 200")
            setStartAnimation(true);
          }
        }, [y]);
      
        useEffect(() => {
          if (startAnimation == true) {
            controls.start('visible');
          }
        }, [startAnimation, controls]);
    return(
        <div
        style={{
       
          width: '100%',
       
          height: '100%',
          padding: '0 2vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    

       <Card sx={{backgroundColor: "rgb(248, 249, 249, 0.8)", zIndex: "300", padding: " 0 2vw 2vh 2vw !important",}}>
       <Text component="h2" weight={700} align="center"  color="#22b8cf" size={"2rem"} sx={{margin: "2vh 0", }}>S kým spolupracuji</Text>
       <SimpleGrid cols={mobile ? 1 : we.length}>
          {we.map((item) => {
            const {name, job, description, button, image} = item;
            return (
         
              
              <Card sx={{ width: "100%", display: "flex", flexDirection: "column", height: "100%" }}  shadow="md">
  <Card.Section>
    <Image
      src={image}
      width={"100%"}
      height={mobile ? 200 : 200}
      alt="Your photo"
      style={{objectFit: "cover", width: "100%"}}
      
    />
  </Card.Section>

  <Group
    position="apart"
    sx={{ marginTop: "1vh", padding: "0 1vw" }}
  >
    <Text component="h3" size="xl" weight="bold" color="#4d4d4d">
      {name}
    </Text>
    <Text component="h3" size="md" weight="bold" color="#4d4d4d">
      {job}
    </Text>
  </Group>
  <Card.Section>
    <Blockquote color="cyan" sx={{ maxWidth: "20vw", minWidth: mobile ? "90vw" : "", width: "100%" }}>
      <Text component="p" size={"sm"}>{description}</Text>
    </Blockquote>
  </Card.Section>
  <Card.Section
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
   
    }}
  >
    <Button
      color="blue"
      variant="outline"
      onClick={() => router.push(button.href)}
      sx={{ width: "80%", marginBottom: "2vh" }}
    >
      {button.text}
    </Button>
  </Card.Section>
</Card>

             
           
            );
          })}
          
          </SimpleGrid>
       </Card>
      
        
        </div>
    )
}