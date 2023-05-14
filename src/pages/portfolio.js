import { Card, Container, Grid, Image, Space, Text } from "@mantine/core";
import FirstScreen from "../Components/UI/FirstScreen";
import { useViewportSize } from "@mantine/hooks";
import { NextSeo } from "next-seo";

export default function Portfolio(){
    const { height, width } = useViewportSize();
    let mobile = width < 768 ? true : false;
let projects = [
    {type: "Web na Next.js", label: "Polystyren sypaný", year: "2022", img: "/image/gradient.webp", video: "", href: "/portfolio/polystyrensypany", popis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl." },
    {type: "Aplikace na Elektronu", label: "Tetovací studio", year: "2023", img: "/image/gradient.webp", video: "", href: "/portfolio/", popis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl." },
    {type: "Aplikace na Elektronu", label: "Artilea Counter", year: "2023", img: "/image/gradient.webp", video: "", href: "/portfolio/", popis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl."},
    {type: "Eshop na EditorX",label: "Eshop Artilea.eu", year: "2023", img: "/image/gradient.webp", video: "", href: "/portfolio/", popis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl."},
    {type: "Web na Next.js",label: "Web Vinarstvibadin.cz", year: "2022", img: "/image/gradient.webp", video: "", href: "/portfolio/", popis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl."},
    {type: "Web",label: "Web ITEAD.cz", year: "2021", img: "/image/gradient.webp", video: "", href: "/portfolio/", popis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl."},
  ].reverse().sort((a, b) => b.year - a.year);
    function Project({img, label, popis, year, type}){
        return(
            <Grid.Col span={mobile ? 12 : 6}>
            <Card >
                <Card.Section sx={{backgroundImage: "url(" + img + ")", height: "70%", minHeight: "20vh", display: "flex", justifyContent: "flex-end", alignItems: "flex-start", padding: "3% 5%", flexDirection: "column", textAlign: "left"}}>
                <div style={{backgroundColor: "#22b8cf", borderRadius: "6px", minWidth: "30%", width: "maxContent" ,padding: "0 5%", display: "flex", alignItems: "center", justifyContent: "space-around", gap: "1vw"}}>
                    <Text weight={600}>{year}</Text>
                    <Text>{type}</Text>
                   </div>
                   <Text size={mobile ? "xl" : "2vw"} weight={600}>{label}</Text>
                  
                </Card.Section>
                <Space h={"2vh"} />
                <Text>{popis}</Text>
            </Card>
            </Grid.Col>
        )
    }

    return(
       <>
  <NextSeo
      title="Mé portoflio | Ondřej Zaplatílek"
      description="Prohlédněte si portfolio Ondřeje Zaplatílka, které zahrnuje vývoj webů, aplikací na platformě Electron a další. Projekty zahrnují e-shopy, webové stránky a aplikace, vše s důrazem na kvalitu a efektivitu."
    />
<main
        className="flex min-h-screen flex-col items-center justify-between"
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <FirstScreen>Portfolio</FirstScreen>
        <Container size={mobile ? "95%" : "60%"} sx={{marginTop: "2vh"}}>
            <Grid>
            {projects.map((project)=> {
                return(
                    <Project {...project} />
                )
            })}
            </Grid>
        </Container>
        </main>
       </>
    )
}