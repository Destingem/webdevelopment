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
export default function WebAplikace({mobile}) {
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
          <Text size={mobile ? "6vw" :"2vw"} sx={{ borderBottom: "3px solid #22b8cf" }}>
            Vytvoříme společně web či webovou aplikaci, která pro vás bude
            ideální
          </Text>
          <Text size={mobile ? "4vw" :"1vw"}>
            Při tvorbě je nejprve důležité zvážit co od stránek očekáváte, zdali
            chcete jednoduchou informativní webovku na wordpressu, která vás
            udrží v kontaktu se stávájícími zakazníky, či potřebujete komplexní
            webovou aplikaci v Next.js, která bude mít pokročilé funkcionality
            na míru. Každé rešení má své pro i proti.
          </Text>
        </div>
        <Image src="/image/weby.svg" sx={{ maxWidth: mobile ? "80%" : "30%", margin: mobile ? "2vh auto" : "0" }} />
      </div>
      <Grid>
      {webServices.map((service)=> {
        return(
            <Grid.Col span={mobile ? 12 : 4}>
            <Card shadow="xl" sx={{ backgroundColor: theme.colors.cyan[0], height: "100%", display: "flex", flexDirection: "column" }}>
                <Card.Section sx={{padding: "1vh 2vw", backgroundColor: theme.colors.cyan[8]}} >
                   <Text weight={600} align="center" size={mobile ? "5vw" :"1vw"} color={"#fff"}> {service.label}</Text>
                </Card.Section>
                <Text sx={{maxWidth: mobile ? "100%" : "80%",  margin:  "2vh auto"}} align="left" size={mobile ? "md" : "xl"}>{service.popis}</Text>
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
                  <Text size={"xl"} color="#22b8cf">Cena</Text>
                 <div style={{display: "flex", justifyContent: "space-around", alignItems:"center"}}>
                 <div>
                  <Text size={mobile ? "xl" : "md"} weight={700}>Od</Text>
                  <Text> <Text  component="span" weight={600} size={mobile ? "8vw" : "2vw"}>{service.cena.od}</Text><Text component="span" >Kč</Text></Text>
                    <Text>Malý projekt</Text>
                  </div>
                  <Text weight={mobile ? 600 : 400} size={mobile ? "12vw" : "4vw"}>-</Text>
                  <div style={mobile ? {display: "flex", flexDirection: "column", alignItems: "flex-end"} : {}}>
                  <Text size={mobile ? "xl" : "md"} weight={700}>Do</Text>
                  <Text> <Text  component="span" weight={600} size={mobile ? "8vw" : "2vw"}>{service.cena.do}</Text><Text component="span" >Kč</Text></Text>
                   <Text>Velký projekt</Text>
                  </div>
                 </div>
                </Card.Section>
            </Card>
            </Grid.Col>
        )
      })}
      </Grid>
    {mobile ?
      <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "1vh 2vw !important", display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center", backgroundImage: "url('/image/topography.svg') ", gap: "2vh"}}>
        <Text  sx={{margin: "2vh auto 0 auto", maxWidth: "95%"}} weight={500} component="h3" size={"8vw"}>Získejte vlastní web</Text>
        <Text   sx={{margin: "0 auto", maxWidth: "95%"}}  size={"4vw"} >Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně vytvoříme webovou stránku či aplikaci, která vás odliší od konkurence. Nečekejte, získejte profesionální řešení pro váš byznys nyní!</Text>
<Link href="/kontakt" style={{width: "100%"}}><Button  fullWidth sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, width: "100%" }} size="md" color="blue">Jdu do toho</Button></Link>
      </Card>
     :
        <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "5vh 2vw !important", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: "url('/image/topography.svg') ",}}>
      <div>  <Text weight={500} component="h3" size={"2vw"}>Získejte konkurenceschopný web s nejmodernějšími technologiemi</Text>
        <Text sx={{maxWidth: "70%"}} size={"1vw"} >Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně vytvoříme webovou stránku či aplikaci, která vás odliší od konkurence. Nečekejte, získejte profesionální řešení pro váš byznys nyní!</Text></div>
<Link href="/kontakt"><Button sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, }} size="xl" color="blue">Jdu do toho</Button></Link>
      </Card>}
    </>
  );
}
