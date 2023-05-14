import {
  Button,
  Card,
  Grid,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { BsCheckCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";
let webServices = [
  {
    label: "Malá Electron",
    popis:
      "Malá Electron aplikace, které splní vaše základní potřeby a současně poskytnou rychlé a stabilní řešení. Ať už potřebujete minimalistický textový editor, správce úkolů nebo jednoduchý prohlížeč souborů, společně vytvoříme aplikaci, která vám usnadní život.",
    href: "#wordpress",
    cena: { od: "10 000", do: "20 000" },
    points: [1,1,1,1,0,0,-1,-1,-1,-1,-1,-1,-1,-1,],
  },
  {
    label: "Střední aplikace",
    popis:
      "Potřebujete pokročilejší desktopovou aplikaci, která zvládne více funkcí a bude se moci rozšířit podle vašich budoucích požadavků? Jsem zde, abych vám pomohl s vývojem středně velkých Electron aplikací, které kombinují výkon a flexibilitu pro splnění vašich středně rozsáhlých projektů. ",
    href: "#nextjs",
    cena: { od: "20 000", do: "35 000" },
    points: [1,1,1,1,1,1,1,1,1,0,1,1,0,0],
  },
  {
    label: "Velká aplikace",
    popis:
      "Hledáte řešení, které zvládne nejnáročnější úkoly a bude schopno efektivně integrovat širokou škálu funkcí? Ať už potřebujete sofistikovanou databázovou aplikaci, nástroj pro správu projektů s pokročilými funkcemi nebo výkonný multimediální přehrávač, společně vytvoříme aplikaci, která překoná vaše očekávání a podpoří vaše ambiciózní cíle.",
    href: "#nextjs",
    cena: { od: "35 000", do: "60 000" },
    points: [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  },
];
let features = [
  "Bezpečnost",
  "Responsivita",
  "Unikátní design",
  "Linux, Windows, macOS",
  "Škálovatelnost",
  "Databáze",
  "Uživatelské účty",
  "Synchronizace dat",
  "Update server",
  "Vícejazyčnost",
  "Serverová část (APIs)",
   "Zdrojový kód",
    "Dokumentace",
    "Webová verze",
   
   
];
/*
  "Bezpečnost",
    "Jednoduchá správa obsahu",
    "Unikátní design",
    "Responsivita",
    "Pokročilé funkcionality",

    "SEO optimalizace",
    "Rychlost načítání",
    
    "Upravitelnost svépomocí",
    "Cena",*/
export default function DesktopAplikace({mobile}) {
  const theme = useMantineTheme();
  return (
    <>
       <div style={{ display: "flex", gap: "2vw", flexDirection: mobile ? "column" : "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: mobile ? "2vh" : "0",
          }}
        >
          <Text component="h3"  size={mobile ? "6vw" :"2vw"} sx={{ borderBottom: "3px solid #22b8cf" }}>
            Vytvořme moderní desktopové aplikace s Electron.js
          </Text>
          <Text component="p"  size={mobile ? "4vw" :"1vw"}>
            Přemýšlíte o vývoji desktopové aplikace, která zaujme svou
            funkcionalitou a moderním designem? Jsem zde, abych vám pomohl!
            Electron.js je univerzální framework pro vývoj multiplatformních
            desktopových aplikací. S Electron.js budete mít na dosah jedno
            řešení, které funguje na Windows, macOS i Linux. Díky tomuto
            technologickému zázraku můžeme vytvořit nativní aplikace s vysokým
            výkonem, přizpůsobivým uživatelským rozhraním a širokou škálou
            funkcí, které běžně očekáváte od desktopových aplikací. Ať už
            potřebujete nástroj pro správu projektů, multimediální přehrávač
            nebo sofistikovanou databázovou aplikaci, společně vytvoříme řešení,
            které přesně odpovídá vašim potřebám.
          </Text>
        </div>
        <Image src="/images/innovative.svg" sx={{ maxWidth: mobile ? "80%" : "30%", margin: mobile ? "2vh auto" : "0" }} />
      </div>
      <Grid>
        {webServices.map((service) => {
          return (
            <Grid.Col span={mobile ? 12 : 4}>
              <Card shadow="xl" sx={{ backgroundColor: theme.colors.cyan[0], height: "100%", display: "flex", flexDirection: "column" }}>
                <Card.Section
                  sx={{
                    padding: "1vh 2vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.colors.cyan[8],
                  }}
                >
                   <Text component="h4"  weight={600} align="center" size={mobile ? "5vw" :"1vw"} color={"#fff"}> {service.label}</Text>
                </Card.Section>
                <Text component="h5"  sx={{maxWidth: mobile ? "100%" : "80%",  margin:  "2vh auto"}} align="left" size={mobile ? "md" : "xl"}>{service.popis}</Text>
                <Card.Section sx={{padding: "2vh 0", borderTop: "3px solid #22b8cf", marginTop: "auto"}}>
                    <List spacing={mobile ? "md" : "xl"} sx={{maxWidth: "80%", margin: "auto",}}>
                        {service?.points?.map((point, index)=> {
                            return(
                                <List.Item sx={{display: "flex", alignItems: "center", gap: "1vw"}} icon={<ThemeIcon size={mobile ? 24 : 32} radius="xl" color={point === 1 ? theme.colors.green[6] : point === 0 ? theme.colors.yellow[6] : theme.colors.red[6]}>{point === 1 ? <BsCheckCircleFill />  : point === 0 ? <AiOutlineMinus /> : <RxCross2 />}</ThemeIcon>}>
                                    
                                    <Text size={mobile ? "md" : "xl"}>{features[index]}</Text>
                                </List.Item>
                            )
                        })}
                    </List>
                </Card.Section>
                <Card.Section sx={{padding: "2vh 10%", borderTop: "3px solid #22b8cf"}}>
                  <Text component="p"  size={"xl"} color="#22b8cf">Cena</Text>
                 <div style={{display: "flex", justifyContent: "space-around", alignItems:"center"}}>
                 <div>
                  <Text component="p" size={mobile ? "xl" : "md"} weight={700}>Od</Text>
                  <Text> <Text  component="span" weight={600} size={mobile ? "8vw" : "2vw"}>{service.cena.od}</Text><Text component="span" >Kč</Text></Text>
                    <Text component="p">Malý projekt</Text>
                  </div>
                  <Text component="p" weight={mobile ? 600 : 400} size={mobile ? "12vw" : "4vw"}>-</Text>
                  <div style={mobile ? {display: "flex", flexDirection: "column", alignItems: "flex-end"} : {}}>
                  <Text component="p" size={mobile ? "xl" : "md"} weight={700}>Do</Text>
                  <Text component="p"> <Text  component="span" weight={600} size={mobile ? "8vw" : "2vw"}>{service.cena.do}</Text><Text component="span" >Kč</Text></Text>
                   <Text component="p">Velký projekt</Text>
                  </div>
                 </div>
                </Card.Section>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
      {mobile ?
      <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "1vh 2vw !important", display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center", backgroundImage: "url('/images/topography.svg') ", gap: "2vh"}}>
        <Text  sx={{margin: "2vh auto 0 auto", maxWidth: "95%"}} weight={500} component="h3" size={"8vw"}>Získejte aplikaci vám ušitou na míru</Text>
        <Text   sx={{margin: "0 auto", maxWidth: "95%"}}  size={"4vw"} > Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně
            vytvoříme aplikaci, která vás odliší od
            konkurence. Nečekejte, získejte profesionální řešení pro váš byznys
            nyní!</Text>
<Link href="/kontakt" style={{width: "100%"}}><Button  fullWidth sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, width: "100%" }} size="md" color="blue">Jdu do toho</Button></Link>
      </Card>
     :
        <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "5vh 2vw !important", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: "url('/images/topography.svg') ",}}>
      <div>  <Text weight={500} component="h3" size={"2vw"}>Získejte ideální aplikaci vám ušitou na míru</Text>
        <Text sx={{maxWidth: "70%"}} size={"1vw"} > Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně
            vytvoříme aplikaci, která vás odliší od
            konkurence. Nečekejte, získejte profesionální řešení pro váš byznys
            nyní!</Text></div>
<Link href="/kontakt"><Button sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, }} size="xl" color="blue">Jdu do toho</Button></Link>
      </Card>}
    </>
  );
}
