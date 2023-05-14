import { Card, List, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { AiOutlineAppstoreAdd, AiOutlineSetting } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { MdMonitorHeart, MdSecurity, MdSupport } from "react-icons/md";
import Info from "./Info";
import { FeatureListItem } from "./WhyUs";
export default function Security({mobile}){
const theme = useMantineTheme();
    return(
        <Card
        sx={{
          backgroundColor: theme.colors.blue[0],
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
          sx={{ color: theme.colors.blue[2], display: "flex", margin: "auto" }}
        >
          1
        </Text>
        <div style={{}}>
          <Text
            weight={700}
            align={mobile ? "center" : "left"}
            size={mobile ?  "10vw" : "2vw"}
            sx={{
              color: theme.colors.blue[6],
            }}
          >
            Bezpečnost
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
          <Text sx={{padding: "2vh 0"}} size={mobile ? "6vw" : "1.25vw"} weight={500} color={theme.colors.blue[7]}>Jak přistupujeme ke kybernetickým hrozbám?</Text>
          <List sx={{}} spacing={"xl"} type="ordered" icon= {<ThemeIcon
                              size={32}
                              radius="xl"
                              color={theme.colors.blue[6]}
                              >
                              
                               <MdSecurity />
                              </ThemeIcon>}>
            <FeatureListItem color={"blue"} heading={"Myslíme na bezpečnost už při vývoji"} icon={<AiOutlineAppstoreAdd />}>
            často nám to zabere nějaký čas a pár čádků kódu navíc, ale výsledek stojí za to.
          </FeatureListItem>
            <FeatureListItem color={"blue"}  heading={"Správná konfigurace serverů a nastavení"} icon={<AiOutlineSetting />}>
           mnoho útoků necílí přímo na aplikaci ale na servery a hostingy, často může jít o základní chyby jako je špatně nastavený firewall, neaktualizovaný software, nebo špatně nastavené oprávnění.
            </FeatureListItem>
            <FeatureListItem color={"blue"}  heading={"Monitoring a logování"} icon={<MdMonitorHeart />}>
           pokud už se něco stane, je důležité to vědět a mít k dispozici dostatek informací pro vyhodnocení a následné řešení.
          </FeatureListItem>
          <FeatureListItem color={"blue"}  heading={"Penetrační testování"} icon={<BiTestTube />}>
            nejlepší způsob jak zjistit, zda je vaše aplikace zabezpečená, je nechat ji otestovat profesionálem. Používáme při něm stejný postup jako útočník, abychom zjistili slabiny a následně je mohli odstranit.
          </FeatureListItem>
          <FeatureListItem color={"blue"}  heading={"Podpora"} icon={<MdSupport />}>
         Ikdyž vám předáme zabezpečený produkt, každý den se objevují nové slabiny technologií nad kterými nemáme kontrolu. Proto nabízíme služby jako je monitoring, aktualizace, zálohování, a podpora v případě kybernetického incidentu.
          </FeatureListItem>
          </List>
        </div>
        <Info />
      </Card>
    )
}