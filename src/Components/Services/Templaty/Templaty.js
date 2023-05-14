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
    label: "Weby a webové aplikace",
    popis:
      "Nabízíme širokou škálu šablon pro weby a webové aplikace, které vám usnadní vytvoření profesionální a funkcionalistické webové prezentace. Naše šablony jsou navrženy s ohledem na moderní trendy a technologie, aby váš projekt vynikal a poskytoval skvělý uživatelský zážitek. Bez ohledu na to, zda potřebujete jednoduchý web nebo komplexní webovou aplikaci, naše šablony vám pomohou rychle dosáhnout vašich cílů.",
    href: "#wordpress",
    cena: { od: "2 500", do: "10 000" },
  
  },
  {
    label: "Desktopové aplikace",
    popis:
      "Nabízíme kvalitní a elegantní šablony pro Electron desktopové aplikace, které vám usnadní vytvoření intuitivního a atraktivního uživatelského rozhraní. Naše šablony jsou navrženy tak, aby zohlednily různé platformy a zařízení, čímž zajistíme, že váš software bude fungovat bezchybně a efektivně. S našimi šablonami můžete rychle vytvořit krásné a profesionální Electron aplikace, které zaujmou vaše uživatele a zvýší produktivitu.",
    href: "#nextjs",
    cena: { od: "5 000", do: "10 000" },
 
  },
  {
    label: "E-shopy",
    popis:
      "Vytvořte úspěšný e-shop s našimi elegantními a funkčními šablonami, které zvýší atraktivitu vaší webové stránky a zároveň usnadní správu a prodej vašich produktů. Naše šablony pro e-shopy jsou navrženy tak, aby byly kompatibilní s různými e-commerce platformami, jako jsou WordPress, Bigcommerce, WooCommerce, Shopify a Squarespace Commerce. Bez ohledu na to, jaké produkty nebo služby prodáváte, naše šablony vám pomohou dosáhnout úspěchu v online prodeji a zvýšit vaši konkurenceschopnost na trhu.",
    href: "#nextjs",
    cena: { od: "15 000", do: "25 000" },
  
  },
];
let features = [
  "Optimální nastavení platformy",
  "Bezpečnost",
  "Responsivita",

  "Redesign v rámci platformy",
  "SEO optimalizace",
  "Vícejazyčnost",
  "Škálovatelnost",

  "Analytické nástroje",
  "Nastavení analytických nástrojů testování (A/B, multivariace)",
  "Propojení s dopravci, heureka, zboží, google apod. (Baselinker)",

  "Další integrace",
  "Custom funkce nad rámec platformy",
  "Reklamní kampaň (FB, Google, Seznam apod.)",
  ,
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
          <Text size={mobile ? "6vw" :"2vw"} sx={{ borderBottom: "3px solid #22b8cf" }}>
            Předpřipravené weby a aplikace pro rychlé a levné řešení
          </Text>
          <Text size={mobile ? "4vw" :"1vw"}>
            Ušetřete čas a peníze s naší nabídkou předem navržených šablon pro
            váš web či aplikaci! Naše šablony nabízejí vynikající řešení pro ty,
            kteří hledají rychlé a cenově dostupné alternativy k běžnému vývoji
            na míru. S důrazem na nižší cenu a rychlejší dodání, naše šablony
            poskytují profesionální a moderní vzhled, který zaujme vaše
            zákazníky a zvýší konkurenceschopnost vašeho projektu. Vyberte si ze
            široké škály šablon pro různé platformy, jako jsou WordPress,
            Electron nebo Next.js, a získejte rychlý přístup k atraktivnímu a
            funkčnímu designu, který bude přizpůsobený vašim potřebám. Naše
            šablony jsou navrženy tak, aby byly snadno upravitelné a
            škálovatelné, což vám umožní rychle rozvíjet váš projekt a dosáhnout
            úspěchu v online světě.
          </Text>
        </div>
        <Image src="/images/filebund.svg" sx={{ maxWidth: mobile ? "80%" : "30%", margin: mobile ? "2vh auto" : "0" }} />
      </div>
      <Grid>
        {webServices.map((service) => {
          return (
            <Grid.Col span={mobile ? 12 : 4}>
              <Card
                shadow="xl"
                sx={{
                  backgroundColor: theme.colors.cyan[0],
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Section
                 sx={{padding: "1vh 2vw", backgroundColor: theme.colors.cyan[8]}}
                >
                  <Text weight={600} align="center" size={mobile ? "5vw" :"1vw"} color={"#fff"}>
                    {service.label}
                  </Text>
                </Card.Section>
                <Text
                 sx={{maxWidth: mobile ? "100%" : "80%",  margin:  "2vh auto"}} align="left" size={mobile ? "md" : "xl"}
                >
                  {service.popis}
                </Text>
             
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
          );
        })}
      </Grid>
    
      {mobile ?
      <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "1vh 2vw !important", display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center", backgroundImage: "url('/images/topography.svg') ", gap: "2vh"}}>
        <Text  sx={{margin: "2vh auto 0 auto", maxWidth: "95%"}} weight={500} component="h3" size={"8vw"}>Hotovo během 72 hodin</Text>
        <Text   sx={{margin: "0 auto", maxWidth: "95%"}}  size={"4vw"} >Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně vytvoříme webovou stránku či aplikaci, která vás odliší od konkurence. Nečekejte, získejte profesionální řešení pro váš byznys nyní!</Text>
<Link href="/kontakt" style={{width: "100%"}}><Button  fullWidth sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, width: "100%" }} size="md" color="blue">Jdu do toho</Button></Link>
      </Card>
     :
        <Card sx={{backgroundColor: theme.colors.cyan[0], padding: "5vh 2vw !important", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: "url('/images/topography.svg') ",}}>
      <div>  <Text weight={500} component="h3" size={"2vw"}>Nečekejte, můžete mít hotovo během 72 hodin</Text>
        <Text sx={{maxWidth: "70%"}} size={"1vw"} >Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně vytvoříme webovou stránku či aplikaci, která vás odliší od konkurence. Nečekejte, získejte profesionální řešení pro váš byznys nyní!</Text></div>
<Link href="/kontakt"><Button sx={{backgroundColor: theme.colors.blue[4] + " !important", ":hover": {backgroundColor: theme.colors.blue[8] + " !important"}, }} size="xl" color="blue">Jdu do toho</Button></Link>
      </Card>}
    </>
  );
}
