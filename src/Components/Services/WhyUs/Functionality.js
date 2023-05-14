import { Card, List, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { AiOutlineAppstoreAdd, AiOutlineSetting } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { MdMonitorHeart, MdSecurity, MdSupport } from "react-icons/md";
import Info from "./Info";
import { FeatureListItem } from "./WhyUs";
export default function Functionality({mobile}){
const theme = useMantineTheme();
    return(
        <Card
        sx={{
          backgroundColor: theme.colors.teal[0],
          width: "100%",
          display: "flex",
          minHeight: "20vh",
          gap: "2vw",
          flexDirection: mobile ? "column" : "row",
maxWidth: mobile ? "90vw" : "",
margin: mobile ? "0 auto" : "",
        }}
      >
        <Text
           size={"12vw"}
          sx={{ color: theme.colors.teal[2], display: "flex", margin: "auto" }}
        >
          3
        </Text>
        <div style={{}}>
          <Text
            weight={700}
            align={mobile ? "center" : "left"}
            size={mobile ?  "10vw" : "2vw"}
            sx={{
              color: theme.colors.teal[6],
            }}
          >
            Funkcionalita
          </Text>
          <Text size={mobile ? "md" : "lg"}>
            Já i moji partneři máme zkušnosti s Kybernetickou bezpečností. Je
            pro nás důležité myslet na zabezpečení již při tvorbě aplikací,
            protože preventivní přístup se vyplácí a náklady na rešení
            kybernetického incidentu jsou zpravidla vysoké, nejen po finanční
            stránce. Přinejlepším musíte počítat s nutností okamžité opravy
            nastavení či kódu, v nejhorším scénáři útočník převezme kontrolu nad
            vašim webem či eshopem a následně může způsobit přímou finanční
            ztrátu, zneprovoznění webu, či získání iterních informací - např.
            dat zákazníků. Pakliže vaše webové stránky slouží jako váš významný
            obchodní kanál, kybernetické hrozby mohou představovat velké riziko pro vás i vaše zákazníky.
          </Text>
          <Text sx={{padding: "2vh 0"}} size={mobile ? "6vw" : "1.25vw"} weight={500} color={theme.colors.teal[7]}>Průběh tvorby funkcionality</Text>
          <List sx={{}} spacing={"xl"} type="ordered" icon= {<ThemeIcon
                              size={32}
                              radius="xl"
                              color={theme.colors.teal[6]}
                              >
                              
                               <MdSecurity />
                              </ThemeIcon>}>
                              <FeatureListItem
            color={"teal"}
            heading={"Definice požadavků"}
            icon={<AiOutlineAppstoreAdd />}
          >
            Domluvíme se na vaších požadavcích a cílu webu, na frontendu i backendu. Aby vaše aplikace funkgovala tak, jak potřebujete a byla připravena na budoucí rozšíření.
          </FeatureListItem>
          <FeatureListItem
            color={"teal"}
            heading={"Návrh řešení"}
            icon={<AiOutlineSetting />}
          >
            Navrhneme technologie, které budou ideální pro splnění cíle a zároveň budou rychlé, zabezpečené, škálovatelné a jednoduché na správu + další kritéria která jsou pro vás důležitá.
          </FeatureListItem>
          <FeatureListItem
            color={"teal"}
            heading={"Vývoj"}
            icon={<MdMonitorHeart />}
          >
            Vytvoříme funkcionalitu dle našeho společného plánu a v průběhu vývoje vás budeme průběžně informovat o stavu projektu.
          </FeatureListItem>
          <FeatureListItem
            color={"teal"}
            heading={"Testování"}
            icon={<BiTestTube />}
          >
            Důkladně otestujeme všechny funkce a zabezpečení aplikace, abychom vyloučili chyby a zvýšili bezpečnost.
          </FeatureListItem>
         
          </List>
        </div>
        <Info />
      </Card>
    )
}