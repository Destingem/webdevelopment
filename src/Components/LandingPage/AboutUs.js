import { Blockquote, Button, Card, Flex, Grid, Group, Text } from "@mantine/core";
import Image from "next/image";
import YourPhoto from "../../../public/images/profile.jpg"; // Replace with the correct path to your photo
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from 'framer-motion';
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";
export default function AboutUs() {
  const we = [
    {
      name: "Pavel Holas",
      job: "Designer",
      image: YourPhoto,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Duis risus. Aliquam erat volutpat. Suspendisse nisl. Fusce consectetuer risus a nunc. Vivamus porttitor turpis ac leo. Etiam commodo dui eget wisi. Nulla quis diam. Mauris tincidunt sem sed arcu. Nullam dapibus fermentum ipsum. Aliquam id dolor. ",
      button: { text: "Více o mě", href: "/" },
    },
    {
        name: "Pavel Holas",
        job: "Designer",
        image: YourPhoto,
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Duis risus. Aliquam erat volutpat. Suspendisse nisl. Fusce consectetuer risus a nunc. Vivamus porttitor turpis ac leo. Etiam commodo dui eget wisi. Nulla quis diam. Mauris tincidunt sem sed arcu. Nullam dapibus fermentum ipsum. Aliquam id dolor. ",
        button: { text: "Více o mě", href: "/" },
      },
      {
        name: "Pavel Holas",
        job: "Designer",
        image: YourPhoto,
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Duis risus. Aliquam erat volutpat. Suspendisse nisl. Fusce consectetuer risus a nunc. Vivamus porttitor turpis ac leo. Etiam commodo dui eget wisi. Nulla quis diam. Mauris tincidunt sem sed arcu. Nullam dapibus fermentum ipsum. Aliquam id dolor. ",
        button: { text: "Více o mě", href: "/" },
      },
  ];


  
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
  return (
    <div style={{ width: '100%'}}>
     
      <Text color="#22b8cf" align="center" size={"4rem"} weight={700} sx={{  marginBottom: "3rem",  transition: "all 0.3s ease-in-out", }}>
      O mě
</Text>
    <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
      <div
        style={{
          height: "10vh",
          width: '100%',
          backgroundColor: '#cccccc',
          height: '100%',
          padding: '0 2vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    
        <motion.div initial="hidden" animate={controls} variants={gridVariants} >
          <Grid>
          {we.map((item) => {
            const {name, job, description, button, image} = item;
            return (
              <Grid.Col span={3}>
              <Flex
                style={{ width: "100%", height: "100%" }}
                justify="center"
                align="center"
              >
                <Card>
                  <Card.Section>
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt="Your photo"
                  />
                  </Card.Section>

                  <Group
                    position="apart"
                    sx={{ marginTop: "1vh", padding: "0 1vw" }}
                  >
                    <Text size="xl" weight="bold" color="#4d4d4d">
                      {name}
                    </Text>
                    <Text size="md" weight="bold" color="#4d4d4d">
                      {job}
                    </Text>
                  </Group>
                  <Card.Section>
                    <Blockquote color="cyan" sx={{ maxWidth: "25vw" }}>
                      {description}
                    </Blockquote>
                  </Card.Section>
                  <Card.Section
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
              </Flex>
              </Grid.Col>
            );
          })}
          </Grid>
      
          </motion.div>
        </div>
       
      </div>
    </div>
  );
}
