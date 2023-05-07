import { Card, Container, Divider, Flex, Grid, SimpleGrid, Text, createStyles } from "@mantine/core";
import FirstScreen from "../Components/UI/FirstScreen";
import { useWindowSize } from "react-use";

export default function Kontakt() {
let window = useWindowSize()
    const useStyles = createStyles((theme) => ({
        backgroundText: {
         
          borderRadius: theme.radius.sm,
          padding: theme.spacing.xs,
          marginTop: "-0vh",
          fontWeight: 600,
        },
      }));
const {classes} = useStyles();

function Item({label, text}){
    return(
        <Flex direction="row" align="flex-start" justify={"center"}>
        <Text size="xl" weight={500} className={classes.backgroundText} component="p">
            {label}
          </Text>
          <Text size={'2vw'} weight={600} component="p" >
            {text}
          </Text>
         
        </Flex>
    )
}
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <FirstScreen>Kontakt</FirstScreen>
      <Container size={"90%"}>
        <SimpleGrid cols={2}>
          {" "}
          <Text size={"4vw"} weight={600}>
            Pojďme se domluvit a společně vytvořit váš ideální web či aplikaci.
          </Text>
          <Card sx={{backgroundColor: "transparent", width: "100%", marginLeft: "auto", textAlign: "right"}}>
          <Text size={"4vw"} weight={600}>
            +420 608 270 754
          </Text>
          <Text size={"3vw"} weight={600}>
            ondrej@ondrejzaplatilek.eu
          </Text>
          <Grid>
          <Grid.Col span={4}>
            <Item label={"IČ"} text={" 17538408"} />
    </Grid.Col>
    <Grid.Col span={8}>
            <Item label={"Adresa"} text={"Cejl 825/20602 00 Brno-střed-Zábrdovice"} />
    </Grid.Col>
          </Grid>
          </Card>
        </SimpleGrid>
        
        <Divider my="xs" label={<Text weight={700} align="center" component="h3" color="#22b8cf" size={"2rem"} sx={{margin: "2vh 0", }}>Nebo</Text>} labelPosition="center" />
        <Text weight={700} align="center" component="h3" color="#22b8cf" size={"3rem"} sx={{margin: "2vh 0", }}>Vyplňte formulář</Text>
        <iframe src="https://forms.monday.com/forms/embed/44a39fe837b8ba9a678c536aa5ed4df4?r=euc1" width="100%" height={window.height} style={{border: "0"}}></iframe>
      </Container>
    </main>
  );
}
