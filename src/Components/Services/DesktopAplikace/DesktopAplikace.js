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
            Vytvořme moderní desktopové aplikace s Electron.js
          </Text>
          <Text size="1vw">
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
        <Image src="/images/innovative.svg" sx={{ minWidth: "30%" }} />
      </div>
      <Grid>
        {webServices.map((service) => {
          return (
            <Grid.Col span={4}>
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
                  sx={{ padding: "2vh 0", borderTop: "3px solid #22b8cf", marginTop: "auto" }}
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
            Získejte ideální aplikaci vám ušitou na míru
          </Text>
          <Text sx={{ maxWidth: "70%" }} size={"1vw"}>
            Začněte svůj úspěch online! Kontaktujte mě ještě dnes a společně
            vytvoříme aplikaci, která vás odliší od
            konkurence. Nečekejte, získejte profesionální řešení pro váš byznys
            nyní!
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
