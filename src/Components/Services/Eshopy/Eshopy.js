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
    label: "Základní eshop",
    popis:
      "Chcete založit malý e-shop pro svůj byznys či projekt, ale nemáte zkušenosti s online prodejem? Jsem zde, abych vám pomohl! Vytvořím pro vás jednoduchý a cenově dostupný e-shop, který bude přizpůsoben vašim základním potřebám. Společně vybereme nejvhodnější platformu a vytvoříme e-shop, který bude připravený pro růst vašeho podnikání.",
    href: "#wordpress",
    cena: { od: "20 000", do: "35 000" },
    points: [1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1, -1],
  },
  {
    label: "Střední aplikace",
    popis:
      "Potřebujete pokročilejší e-shop s více funkcemi a schopností růstu podle vašich budoucích požadavků? Nabízím vývoj středně velkých e-shopů, které kombinují flexibilitu a škálovatelnost pro splnění požadavků vašeho rostoucího podnikání. Společně navrhneme e-shop s pokročilými funkcemi, jako je např. integrace s ERP systémem, a vytvoříme řešení, které bude podporovat růst vašeho byznysu. ",
    href: "#nextjs",
    cena: { od: "35 000", do: "50 000" },
    points: [1,1,1,1,1,1,1,1,-1,0,0,0,-1],
  },
  {
    label: "Velká aplikace",
    popis:
      "Hledáte řešení pro velký e-shop s nejnáročnějšími funkcemi a integracemi?  Ať už potřebujete e-shop s pokročilými funkcemi, jako je např. pokročilá správa zásob, nástroje pro marketing a analýzu, nebo integrace s externími systémy, společně vytvoříme aplikaci, která překoná vaše očekávání a podpoří vaše ambiciózní cíle. Spolupracujme na vytvoření e-shopu, který vám pomůže dosáhnout úspěchu v online světě.",
    href: "#nextjs",
    cena: { od: "50 000", do: "100 000" },
    points: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
export default function DesktopAplikace() {
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
          Profesionální a funkční e-shopy navržené pro váš úspěch v online podnikání
          </Text>
          <Text size="1vw">
            V dnešní digitální době je e-shop klíčovým nástrojem pro úspěch
            každého podnikání. Jsem zde, abych vám pomohl vytvořit profesionální
            a funkční e-shop, který bude přizpůsoben vašim potřebám a zároveň
            bude přitažlivý pro vaše zákazníky. S širokou škálou dostupných
            platforem, jako jsou Shoptet, WordPress, Bigcommerce, WooCommerce,
            Shopify a Squarespace Commerce, mohu vytvořit řešení, které bude
            nejlepší pro váš byznys.
          </Text>
        </div>
        <Image src="/images/shoping.svg" sx={{ minWidth: "30%" }} />
      </div>
      <Grid>
        {webServices.map((service) => {
          return (
            <Grid.Col span={4}>
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
                  sx={{
                    padding: "1vh 2vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.colors.cyan[8],
                  }}
                >
                  <Text weight={600} align="center" size={"1vw"} color={"#fff"}>
                    {service.label}
                  </Text>
                </Card.Section>
                <Text
                  sx={{ maxWidth: "80%", margin: "2vh auto" }}
                  align="left"
                  size={"xl"}
                >
                  {service.popis}
                </Text>
                <Card.Section
                  sx={{
                    padding: "2vh 0",
                    borderTop: "3px solid #22b8cf",
                    marginTop: "auto",
                  }}
                >
                  <List spacing={"xl"} sx={{ maxWidth: "80%", margin: "auto" }}>
                    {service?.points?.map((point, index) => {
                      return (
                        <List.Item
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1vw",
                          }}
                          icon={
                            <ThemeIcon
                              size={32}
                              radius="xl"
                              color={
                                point === 1
                                  ? theme.colors.green[6]
                                  : point === 0
                                  ? theme.colors.yellow[6]
                                  : theme.colors.red[6]
                              }
                            >
                              {point === 1 ? (
                                <BsCheckCircleFill />
                              ) : point === 0 ? (
                                <AiOutlineMinus />
                              ) : (
                                <RxCross2 />
                              )}
                            </ThemeIcon>
                          }
                        >
                          <Text size={"xl"}>{features[index]}</Text>
                        </List.Item>
                      );
                    })}
                  </List>
                </Card.Section>
                <Card.Section
                  sx={{ padding: "2vh 10%", borderTop: "3px solid #22b8cf" }}
                >
                  <Text size={"xl"} color="#22b8cf">
                    Cena
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Text weight={700}>Od</Text>
                      <Group>
                        <Text weight={600} size={"2vw"}>
                          {service.cena.od}
                        </Text>
                        <Text>Kč</Text>
                      </Group>
                      <Text>Malý projekt</Text>
                    </div>
                    <Text size={"4vw"}>-</Text>
                    <div>
                      <Text weight={700}>Do</Text>
                      <Group>
                        {" "}
                        <Text weight={600} size={"2vw"}>
                          {service.cena.do}
                        </Text>
                        <Text>Kč</Text>
                      </Group>
                      <Text>Velký projekt</Text>
                    </div>
                  </div>
                </Card.Section>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
      <Card
        sx={{
          backgroundColor: theme.colors.cyan[0],
          padding: "5vh 2vw !important",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: "url('/images/topography.svg') ",
        }}
      >
        <div>
          {" "}
          <Text weight={500} component="h3" size={"2vw"}>
            Začněme s tvorbou vašeho e-shopu hned
          </Text>
          <Text sx={{ maxWidth: "70%" }} size={"1vw"}>
            Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně
            vytvoříme eshop, která vás odliší od konkurence a splní nároky a očekávání vaších zákazníků. Nečekejte,
            získejte profesionální řešení pro váš byznys nyní!
          </Text>
        </div>
        <Link href="/kontakt">
          <Button
            sx={{
              backgroundColor: theme.colors.blue[4] + " !important",
              ":hover": {
                backgroundColor: theme.colors.blue[8] + " !important",
              },
            }}
            size="xl"
            color="blue"
          >
            Jdu do toho
          </Button>
        </Link>
      </Card>
    </>
  );
}
