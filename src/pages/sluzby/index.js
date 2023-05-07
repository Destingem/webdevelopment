import { Text, Image, useMantineTheme, SimpleGrid } from "@mantine/core";
import FirstScreen from "../../Components/UI/FirstScreen";
import Overview from "../../Components/Services/OverView";

export default function Sluzby() {
  const theme = useMantineTheme();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2vh",
          gap: "2vw",
          padding: "0 2vw",
        }}
      >
        <Text style={{ maxWidth: "60%" }} size="6vw">
          Vytvořme spolu vaši aplikaci
        </Text>
        <div style={{ padding: "5vh 5vw", marginLeft: "20vw" }}>
          <Image
            src="/images/website.svg"
            sx={{
              marginLeft: "-20vw",
              marginBottom: "-20vh",
              backgroundColor: theme.colors.cyan[2],
            }}
          />
          <Image
            src="/images/shop.svg"
            fill
            sx={{ backgroundColor: theme.colors.dark[2], zIndex: 20 }}
          />
        </div>
      </div>
      <Text size={"2vw"} sx={{maxWidth: "60%"}}>
        Tvořím profesionální webové stránky a aplikace v Next.js,
        Wordpress a Electron. Jsme připraven
        pomoci vám realizovat vaše projekty a vytvořit moderní stránky a
        aplikace, které přitahují pozornost vašich zákazníků.
      </Text>
     <Overview />
    </main>
  );
}
