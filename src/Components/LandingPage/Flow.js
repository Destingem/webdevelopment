import { Card, Grid, SimpleGrid, Text } from "@mantine/core";
import XArrow from 'react-xarrows';
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useRef, useState } from "react";
import { useViewportSize } from "@mantine/hooks";

function GridCard({i, heading, text}){
    const { height, width } = useViewportSize();
    let mobile = width < 768 ? true : false;
   if(!mobile){
    return(
        <Card color="#e9f8fa" shadow="xl" sx={{display: "flex", textAlign: "left", height: "100%", backgroundColor: "#e9f8fa"}}>
           <div style={{display: "flex", alignItems: "center", justifyContent: "center", minWidth: "10%"}}> <Text color="#22b8cf" align="center" weight={700} size={"2rem"}>{i}.</Text></div>
            <div style={{marginLeft: "2vw"}}>
                <Text size={"1.5rem"} weight={700}>{heading}</Text>
                <Text size={"1rem"} weight={400}>{text}</Text>
            </div>
        </Card>
    )
   } else {
    return(
        <Card color="#e9f8fa" shadow="xl" sx={{display: "flex", textAlign: "left", height: "100%", backgroundColor: "#e9f8fa"}}>
        
            <div style={{marginLeft: "2vw"}}>
            <Text component="h2"  sx={{}} color="#22b8cf" align="center" weight={700} size={"1.5rem"}>{i}. <Text component="span" size={"5vw"} weight={700}>{heading}</Text></Text>
                
                <Text component="h2" size={"1rem"} weight={400}>{text}</Text>
            </div>
        </Card>
    )
   }
}

export default function Flow(){
    const [hovered, setHovered] = useState(false);
    const hoverTimeout = useRef(null);
    const { height, width } = useViewportSize();
    let mobile = width < 768 ? true : false;
    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => {
            setHovered(true);
        }, 200);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => {
            setHovered(false);
        }, 200);
  
    };

    return(
        <div style={{ width: "100%", minHeight: "50vh", padding: mobile ? "1vh 5vw" : "8vh 0 0 15vw", display: "flex", flexDirection: "column", gap: "3vh", overflow: "hidden"  }}>
             <Text component="h2" color="#22b8cf" align="center" size={mobile ? "15vw" : "4vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}>
            Jak probíhá vývoj?
            </Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1 1 auto", transition: "margin-right 1s, margin-left 1s", marginRight: hovered ? "10vw" : "0", marginLeft: hovered ? "-10vw":"0" }}>
                <SimpleGrid cols={1}>
            <Grid info="První řádek">
            <Grid.Col span={mobile ? 12 : 8}><GridCard i={1} heading="Definice požadavků" text="Komunikace s klientem a shromažďování požadavků
Analýza a specifikace požadavků
Vytvoření dokumentu se specifikací požadavků (SRS)"  /></Grid.Col>
            <Grid.Col span={mobile ? 12 : 4}>
            <GridCard i={2} heading="Plánování a návrh" text="Vytvoření časového plánu a rozdělení úkolů
Vytvoření návrhu uživatelského rozhraní (UI) a základního layoutu aplikace
Vytvoření wireframe nebo prototypu aplikace
Schválení návrhu a prototypu klientem"  />
            </Grid.Col>
            </Grid>
            <div info="Druhý řádek"  id="element2">
            <GridCard i={3} heading="Vývoj" text="Implementace front-endu (uživatelské rozhraní, interakce)
Implementace back-endu (databáze, API, logika aplikace)
Průběžné testování a ladění během vývoje"  />
            </div>
            <SimpleGrid cols={mobile ? 1 : 4} info="Třetí řádek">
                <div>
                <GridCard i={4} heading="Testování" text="Provedení jednotkových testů
Provedení integračních testů
Provedení systémových testů
Provedení testů kompatibility a výkonu
Oprava nalezených chyb"  />
                </div>
                <div>
                <GridCard i={5} heading="Nasazení" text="Příprava produkčního prostředí
Nasazení aplikace na produkční server
Testování v produkčním prostředí"  />
                </div>
                <div>
                <GridCard i={6} heading="Uvedení do provozu a podpora" text="Zprovoznění aplikace pro klienta a uživatele
Poskytování technické podpory a údržby
Pravidelné aktualizace a vylepšení aplikace"  />
                </div>
                <div id="element1">
                <GridCard  i={7} heading="Zhodnocení a zpětná vazba" text="Sběr zpětné vazby od klienta a uživatelů
Analýza úspěšnosti a efektivity aplikace
Plánování a implementace vylepšení na základě zpětné vazby"  />
                </div>
            </SimpleGrid>
        </SimpleGrid>
                </div>
              {!mobile &&   <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width: "15vw", minWidth: "15vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Link href="/vyvoj"><FiArrowRight style={{transition: "all 0.3s"}} color={hovered ? "#22b8cf" : "#c7caca"} size={"6vw"} /></Link>
                            <Text component="h4" color="#22b8cf" weight={700} size={"1.75rem"} style={{ position: "absolute", left: "-120%", opacity: hovered ? 1 : 0, whiteSpace: "nowrap", transition: "opacity 0.5s ease-in-out" }}>Více o vývoji</Text>
                        </div>
                </div>}
            </div>
            {!mobile && <XArrow
                start="element1"
                end="element2"
                startAnchor="bottom"
                endAnchor="left"
                strokeWidth={2}
                path="grid"
                gridRadius={15}
            />}
        </div>
    )
}
