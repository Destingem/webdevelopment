import { Container, Title, Accordion, createStyles, rem, useMantineTheme, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
    width: "100%",
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    backgroundColor: theme.colors.cyan[0],
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.cyan[1] : theme.colors.cyan[1]
    }`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FAQ({mobile}) {
  const { classes } = useStyles();
  const theme = useMantineTheme()
  return (
    <Container size={"95%"} className={classes.wrapper}>
        <Text component="h2" color="#22b8cf" align="center" size={mobile ? "10vw" : "4vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}>
        Často kladené dotazy (FAQ)
            </Text>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            Co je to Next.js a k čemu se používá?
          </Accordion.Control>
          <Accordion.Panel>
            Next.js je open-source vývojový rámec vytvořený na platformě Node.js
            a napsaný v JavaScriptu. Je založen na React, knihovně pro vývoj
            uživatelských rozhraní od Facebooku. Next.js je navržen tak, aby
            umožňoval vývoj statických webových stránek a server-renderovaných
            webových aplikací. To znamená, že s Next.js můžete vytvářet
            optimalizované webové stránky s vynikajícími výkonnostními metrikami
            a SEO.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Jaký je rozdíl mezi React a Next.js?
          </Accordion.Control>
          <Accordion.Panel>
            React je JavaScriptová knihovna pro vytváření uživatelských
            rozhraní, zatímco Next.js je vývojový rámec postavený na Reactu.
            Next.js poskytuje některé další funkce navíc, jako je server-side
            rendering a generování statických stránek, které nejsou v základním
            Reactu dostupné.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            Co je Electron a k čemu se používá?
          </Accordion.Control>
          <Accordion.Panel>
            Electron je open-source framework, který umožňuje vývoj nativních
            desktopových aplikací pomocí webových technologií jako jsou HTML,
            CSS a JavaScript. Electron používá Node.js pro backend a Chromium
            pro frontend, což vám umožňuje vytvářet aplikace, které jsou
            platformově nezávislé (Windows, MacOS, Linux).
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Co je Wordpress a jak se liší od Next.js nebo React?
          </Accordion.Control>
          <Accordion.Panel>
            Wordpress je open-source systém pro správu obsahu (CMS) napsaný v
            PHP. Je primárně zaměřen na tvorbu blogů a webových stránek s
            možností přizpůsobení pomocí široké škály pluginů a témat. Na druhé
            straně, React a Next.js jsou JavaScriptové knihovny a rámce pro
            vývoj moderních webových aplikací.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            aké jsou výhody použití Wordpressu oproti Next.js nebo React?
          </Accordion.Control>
          <Accordion.Panel>
            Wordpress je jednoduchý na použití a má velkou uživatelskou
            komunitu, což znamená, že existuje mnoho zdrojů pro učení a podporu.
            Wordpress také nabízí robustní systém pro správu obsahu, který je
            ideální pro blogy a webové stránky s
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
