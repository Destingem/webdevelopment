import { Card, List, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { AiOutlineAppstoreAdd, AiOutlineSetting } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { MdMonitorHeart, MdSecurity, MdSupport } from "react-icons/md";
import Info from "./Info";
import { FeatureListItem } from "./WhyUs";
export default function Design() {
  const theme = useMantineTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.colors.violet[0],
        width: "100%",
        display: "flex",
        minHeight: "20vh",
        gap: "2vw",
      }}
    >
      <Text
        size={"6vw"}
        sx={{ color: theme.colors.violet[2], display: "flex", margin: "auto" }}
      >
        2
      </Text>
      <div style={{}}>
        <Text
          weight={700}
          size={"2vw"}
          sx={{
            color: theme.colors.violet[6],
          }}
        >
          Design
        </Text>
        <Text size={"lg"}>
          Každý náš web na zakázku je unikátní. Vytvoříme pro vás design, který
          bude odpovídat vašim potřebám a přání. Vždy se snažíme vytvořit
          design, který je moderní, přehledný a přitom jednoduchý. Proto je také
          cena za vývoj webu na zakázku vyšší ve srovnání s našimi šablonami, či
          jinými vývojáři, kteří tvoří například šablonové weby na platformě
          Wordpress. Je vždy především na vašem zvážení co od webu očekáváte,
          pakliže potřebujete jen malý web, který bude čistě informativní pro
          vaše zákazníky (například Otevírací hodiny, či adresa provozovny),
          osobně vám doporučuji, udělejte si ho ve wordpressu sami, zakupte si
          šablonu co se vám líbí a doplňte si vaše logo a texty. Tato práce vám
          může zabrat pravděpodobně jen pár hodin a ušetříte v porovnání s
          jinými "developery", kteří použijí univerzální šablonu zdarma a
          odvedou podobnou práci co vy. Na druhou stranu pokud potřebujete web,
          který bude odpovítat vaší brand identitě, s funkcemi co potřebujete a
          který bude optimalizovaný po všech stránkách zvolte vývoj webu na
          zakázku s námi či jiným vývojářem.
          {/*
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
           */}
        </Text>
        <Text
          sx={{ padding: "2vh 0" }}
          size={"1.25vw"}
          weight={500}
          color={theme.colors.violet[7]}
        >
          Průběh tvorby designu
        </Text>
        <List
          sx={{}}
          spacing={"xl"}
          type="ordered"
          icon={
            <ThemeIcon size={32} radius="xl" color={theme.colors.violet[6]}>
              <MdSecurity />
            </ThemeIcon>
          }
        >
          <FeatureListItem
            color={"violet"}
            heading={"Definice požadavků"}
            icon={<AiOutlineAppstoreAdd />}
          >
            Domluvíme se na vaších požadavcích a cílu webu. Aby v zákazníkovi zanechal ideální dojem.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Prototypování"}
            icon={<AiOutlineSetting />}
          >
            Začneme spolupracovat na designu webu - branding
            podklady, prototypování, wireframy, grafický návrh.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Vývoj"}
            icon={<MdMonitorHeart />}
          >
            Začneme pracovat na stránce samotné, design vytvoříme na základě
            grafického návrhu a následně přidáme funkce, které jsme si společně
            domluvili při návrhu technického řešení. Samozřejmě i během této
            fáze je možnost změn, takže pokud vás něco napadne později, nebo
            byste chtěli něco změnit, není v tom problém.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Testování"}
            icon={<BiTestTube />}
          >
            Frontend je před nasazením potřeba důkladně otestovat, zajistit, že vše je správně jak má být a váš web je optimalizován pro všechna zařízení.
          </FeatureListItem>
         
        </List>
      </div>
      <Info />
    </Card>
  );
}

/*
  >
          <FeatureListItem
            color={"violet"}
            heading={"Definice požadavků a cílů webu"}
            icon={<AiOutlineAppstoreAdd />}
          >
            Nejprve se domluvíme, jaké jsou vaše očekávání od webu a v
            závislosti na tom jaké technologie při vývoji použijeme. Následně
            probereme časový harmonogram a cenu.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Návrh řešení"}
            icon={<AiOutlineSetting />}
          >
            Navrhneme celkové technické řešení, které bude optimální pro vaše
            potřeby. Po té začneme spolupracovat na designu webu - branding
            podklady, prototypování, wireframy, grafický návrh.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Vývoj"}
            icon={<MdMonitorHeart />}
          >
            Začneme pracovat na stránce samotné, design vytvoříme na základě
            grafického návrhu a následně přidáme funkce, které jsme si společně
            domluvili při návrhu technického řešení. Samozřejmě i během této
            fáze je možnost změn, takže pokud vás něco napadne později, nebo
            byste chtěli něco změnit, není v tom problém.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Tesotvání"}
            icon={<BiTestTube />}
          >
            Aplikaci je před nasazením pořádně otestovat, základem jsou unit
            testy jednotlivých částí aplikace, ale také je důležité otestovat
            celkovou funkčnost aplikace. Pokud se jedná o web, je důležité
            otestovat ho na různých zařízeních a prohlížečích.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Nasazení"}
            icon={<MdSupport />}
          >
            Web či aplikace je už v této fázi otestovaná a nyní je potřeba ji
            ukázat světu. Nastavíme vám doménu, dns, ssl certifikát (https),
            server samotný a též též další služby co se vám budou hodit (např.
            FTPS). Nakonec nastavíme a otestujeme zabezpečení serveru a předáme
            vám přístup. Je pak na vás zdali se rozhodnete, že web budete
            spravovat sami, či nám ponecháte přístup a my vám budeme provádět
            pravidelné aktualizace, zálohy a penetrační testování.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Uvedení do provozu a podpora"}
            icon={<MdSupport />}
          >
            První dny provozu jsou zkouška ohněm a my tu budeme stále pro vás,
            pokud se vám nebude něco zdát, či budete potřebovat poradit,
            pomůžeme vám. Rádi vám si zaškolíme, abyste mohli spravovat web
            sami, ale pokud se v této době rozhodnete, že byste chtěli na webu
            něco změnit, nebo přidat, není problém, ale musíte počítat s dalšími náklady, za funkčnost webu ručíme a pokud je chyba na naší straně, náprava je samozřejmě zcela zdarma, ale pokud budete chtít něco změnit, nebo přidat, musíte už počítat s nějakámi náklady.
            Z praxe doporučuji zapsat si postřehy a připomínky třeba během roku a pak nám je předat s tím, že cenově vás to vyjde mnohem lépe.
          </FeatureListItem>
          <FeatureListItem
            color={"violet"}
            heading={"Hodnocení a zpětná vazba"}
            icon={<MdSupport />}
          >
            Vážíme si vašeho názoru a je pro nás důležité neustále zdokonalovat naše služby, proto budeme rádi, když budeme moci společně na konci naší spolupráce zhodnotit, co se povedlo a co by se dalo vylepšit.
            Veškerou zpětnou vazbu si bereme k srdci a ať už je negativní, či pozitivní, transparentně ji zveřejníme na našich stránkách. (samozřejmě s vaším souhlasem)
          </FeatureListItem>
*/