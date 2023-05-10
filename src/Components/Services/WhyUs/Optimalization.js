import { Card, List, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { AiOutlineAppstoreAdd, AiOutlineSetting } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { MdMonitorHeart, MdSecurity, MdSupport } from "react-icons/md";
import Info from "./Info";
import { FeatureListItem } from "./WhyUs";
export default function Optimalization(){
const theme = useMantineTheme();
    return(
        <Card
        sx={{
          backgroundColor: theme.colors.yellow[0],
          width: "100%",
          display: "flex",
          minHeight: "20vh",
          gap: "2vw",
        }}
      >
        <Text
          size={"6vw"}
          sx={{ color: theme.colors.yellow[2], display: "flex", margin: "auto" }}
        >
          4
        </Text>
        <div style={{}}>
          <Text
            weight={700}
            size={"2vw"}
            sx={{
              color: theme.colors.yellow[6],
            }}
          >
            Optimalizace
          </Text>
          <Text size={"lg"}>
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
          <Text sx={{padding: "2vh 0"}} size={"1.25vw"} weight={500} color={theme.colors.yellow[7]}>Jak optimalizujeme web?</Text>
          <List sx={{}} spacing={"xl"} type="ordered" icon= {<ThemeIcon
                              size={32}
                              radius="xl"
                              color={theme.colors.yellow[6]}
                              >
                              
                               <MdSecurity />
                              </ThemeIcon>}>
            <FeatureListItem color={"yellow"} heading={"Technologie"} icon={<AiOutlineAppstoreAdd />}>
            Vybereme společně technologie, které budou pro váš projekt nejvhodnější. Některé technologie jsou zabezpečenější než jiné, a některé jsou vhodnější pro určité typy projektů.
          </FeatureListItem>
            <FeatureListItem color={"yellow"} heading={"Konfigurace"} icon={<AiOutlineSetting />}>
           Upravíme technologie, tak aby seděli co nejvíce k vaší aplikaci.
            </FeatureListItem>
            <FeatureListItem color={"yellow"} heading={"SEO optimalizace"} icon={<MdMonitorHeart />}>
           Při vývoji postupujeme v souladu s nejnovějšími standarty vyhledavačů, abychom zajistili, že vaše aplikace bude co nejlépe indexována a zobrazována co nejvýše ve výsledcích vyhledávání.
          </FeatureListItem>
          <FeatureListItem color={"yellow"} heading={"SEM a marketing"} icon={<BiTestTube />}>
            Při nasazení aplikace vám můžeme zajistit nastavení reklam. A´t už v samotném vyhledávání, či na sociálních sítích a dalších platformách.
          </FeatureListItem>
          <FeatureListItem color={"yellow"} heading={"Monitoring a vyhodnocování"} icon={<MdSupport />}>
         Již při vývoji implementujeme analytické nástroje, aby bylo možné sledovat a vyhodnocovat chování uživatelů, prokliky, konverze a další důležité ukazatele. Též vám můžeme vyhodnovovat reklamní kampaně a pomoci vám je zlepšit.
          </FeatureListItem>
          </List>
        </div>
        <Info />
      </Card>
    )
}