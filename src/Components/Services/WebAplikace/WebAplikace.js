import { Button, Card, Grid, Group, Image, List, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import {BsCheckCircleFill} from "react-icons/bs";
import {RxCross2} from "react-icons/rx"
import {AiOutlineMinus} from "react-icons/ai"
import Link from "next/link";
let webServices = [
 
  {
    label: "Stránky v Wordpressu",
    popis:
      "WordPressem je nejrozšířenější nástroj pro správu obsahu (CMS) s nesčetným množstvím šablon a rozšíření, které umožňují snadnou tvorbu a úpravy webů. WordPress je ideální volbou pro malé a středně velké podniky, blogy nebo e-shopy. Společně vytvoříme web, který bude přizpůsobený vašim potřebám a zároveň bude snadno spravovatelný..",
    href: "#wordpress",
    cena: {od: "15 000", do: "30 000"},
    points:[1, 1, 1, 0, 1, 1, -1, -1, 1, 1, 1]
  },
  {
    label: "React aplikace",
    popis:
      "React je vysoce škálovatelná a výkonná knihovna pro vývoj uživatelských rozhraní, která umožňuje snadno navrhovat a implementovat interaktivní prvky. S Reactem získáte flexibilitu a výkon pro vytvoření jak malých, tak velkých projektů. Spolupracujme na vytvoření nezapomenutelného uživatelského zážitku pro vaše návštěvníky!",
    href: "#nextjs",
    cena: {od: "15 000", do: "50 000"},
    points: [1, 1,1,1-1,-1,1,1,1,0,-1, 0]
  },
  {
    label: "Aplikace v Next.js",
    popis:
      "Chcete svůj web posunout na vyšší úroveň? Next.js je moderní framework pro React, který nabízí pokročilé funkce, jako je server-side rendering, statické generování stránek a API routes. Díky tomu je Next.js ideální volbou pro produkční nasazení ve velkých projektech a webových aplikacích, které vyžadují vysoký výkon a optimální zabezpečení.",
    href: "#nextjs",
    cena: {od: "30 000", do: "60 000"},
    points: [1,1,1,1,1,1,1,1,0,0,0]
  },
];
let features = [
    "Bezpečnost",
    "Jednoduchá správa obsahu",
    "Responsivita",
    "Unikátní design",
    "SEO optimalizace",
    "Rychlost načítání",
    "Škálovatelnost",
   
    "Pokročilé funkcionality",
    
   
    
    "Náklady na hosting",
    "Upravitelnost svépomocí",
    "Cena",
    
]
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
export default function WebAplikace() {
    const theme = useMantineTheme();
  return (
    <>
      <div style={{ display: "flex", gap: "2vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Text size="2vw" sx={{ borderBottom: "3px solid #22b8cf" }}>
            Vytvoříme společně web či webovou aplikaci, která pr ovás bude
            ideální
          </Text>
          <Text size="1vw">
            Při tvorbě je nejprve důležité zvážit co od stránek očekáváte, zdali
            chcete jednoduchou informativní webovku na wordpressu, která vás
            udrží v kontaktu se stávájícími zakazníky, či potřebujete komplexní
            webovou aplikaci v Next.js, která bude mít pokročilé funkcionality
            na míru. Každé rešení má své pro i proti.
          </Text>
        </div>
        <Image src="/images/weby.svg" sx={{ maxWidth: "30%" }} />
      </div>
      <Grid>
      {webServices.map((service)=> {
        return(
            <Grid.Col span={4}>
            <Card shadow="xl" sx={{ backgroundColor: theme.colors.cyan[0], height: "100%", display: "flex", flexDirection: "column" }}>
                <Card.Section sx={{padding: "1vh 2vw", backgroundColor: theme.colors.cyan[8]}} >
                   <Text weight={600} align="center" size={"1vw"} color={"#fff"}> {service.label}</Text>
                </Card.Section>
                <Text sx={{maxWidth: "80%",  margin: "2vh auto"}} align="left" size={"xl"}>{service.popis}</Text>
                <Card.Section sx={{padding: "2vh 0", borderTop: "3px solid #22b8cf", marginTop: "auto"}}>
                    <List spacing={"xl"} sx={{maxWidth: "80%", margin: "auto",}}>
                        {service?.points?.map((point, index)=> {
                            return(
                                <List.Item sx={{display: "flex", alignItems: "center", gap: "1vw"}} icon={<ThemeIcon size={32} radius="xl" color={point === 1 ? theme.colors.green[6] : point === 0 ? theme.colors.yellow[6] : theme.colors.red[6]}>{point === 1 ? <BsCheckCircleFill />  : point === 0 ? <AiOutlineMinus /> : <RxCross2 />}</ThemeIcon>}>
                                    
                                    <Text size={"xl"}>{features[index]}</Text>
                                </List.Item>
                            )
                        })}
                    </List>
                </Card.Section>
                <Card.Section sx={{padding: "2vh 10%", borderTop: "3px solid #22b8cf"}}>
                  <Text size={"xl"} color="#22b8cf">Cena</Text>
                 <div style={{display: "flex", justifyContent: "space-around", alignItems:"center"}}>
                 <div>
                  <Text weight={700}>Od</Text>
                    <Group><Text weight={600}  size={"2vw"}>{service.cena.od}</Text><Text >Kč</Text></Group>
                    <Text>Malý projekt</Text>
                  </div>
                  <Text size={"4vw"}>-</Text>
                  <div>
                  <Text weight={700}>Do</Text>
                  <Group> <Text  weight={600} size={"2vw"}>{service.cena.do}</Text><Text >Kč</Text></Group>
                   <Text>Velký projekt</Text>
                  </div>
                 </div>
                </Card.Section>
            </Card>
            </Grid.Col>
        )
      })}
      </Grid>
      <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "5vh 2vw !important", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: "url('/images/topography.svg') ",}}>
      <div>  <Text weight={500} component="h3" size={"2vw"}>Získejte konkurenceschopný web s nejmodernějšími technologiemi</Text>
        <Text sx={{maxWidth: "70%"}} size={"1vw"} >Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně vytvoříme webovou stránku či aplikaci, která vás odliší od konkurence. Nečekejte, získejte profesionální řešení pro váš byznys nyní!</Text></div>
<Link href="/kontakt"><Button sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, }} size="xl" color="blue">Jdu do toho</Button></Link>
      </Card>
    </>
  );
}
