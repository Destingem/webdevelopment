import { Text, Image, useMantineTheme, SimpleGrid, Button, createStyles } from "@mantine/core";
import FirstScreen from "../../Components/UI/FirstScreen";
import Overview from "../../Components/Services/OverView";
import { useReducer } from "react";
import WebAplikace from "../../Components/Services/WebAplikace/WebAplikace";
import DesktopAplikace from "../../Components/Services/DesktopAplikace/DesktopAplikace";
import Eshopy from "../../Components/Services/Eshopy/Eshopy";
import Templaty from "../../Components/Services/Templaty/Templaty";
import WhyUs from "../../Components/Services/WhyUs/WhyUs";
import DevFlow from "../../Components/Services/DevFlow";
import Reference from "../../Components/Services/Reference";
import Portfolio from "../../Components/Services/Portfolio";
import { FAQ } from "../../Components/Services/FAQ";
import CTA from "../../Components/Services/CTA";

export default function Sluzby() {
  let useStyles = createStyles((theme) => ({
    btn: {
      backgroundColor: theme.colors.cyan[5] + "!important",
      ":hover": {
        backgroundColor: theme.colors.cyan[6] + "!important",
      }
    }
  }));
  function stateReducer(state, action) {
    switch (action.payload) {
      case 1:
        return {num:1, text: "Webové stránky a aplikace"};
      case 2:
        return {num: 2, text: "Desktop aplikace"};
      case 3:
        return {num:3, text: "Eshopy"} ;
      case 4:
        return {num:4, text: "Templaty"};
      default:
        return state;
    }
  }
  
  const [currentHover, setCurrentHover] = useReducer(stateReducer,  {num:1, text: "Webové stránky a aplikace"});
  const theme = useMantineTheme();
  const {classes} = useStyles();
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
     <Overview currentHover={currentHover} setCurrentHover={setCurrentHover}/>
     <div style={{maxWidth: "80%", display: "flex", flexDirection: "column", marginTop: "-5vh", gap: "2vh"}}>
      {currentHover.num === 1 && <WebAplikace />}
      {currentHover.num === 2 && <DesktopAplikace />}
      {currentHover.num === 3 && <Eshopy />}
      {currentHover.num === 4 && <Templaty />}
   
<Button.Group>
<Button size="xl" disabled={currentHover.num === 1} onClick={() => { setCurrentHover({ payload: 1 }) }} className={classes.btn}>Webové stránky a aplikace</Button>
<Button size="xl" disabled={currentHover.num === 2} onClick={() => { setCurrentHover({ payload: 2 }) }} className={classes.btn}>Desktop aplikace</Button>
<Button size="xl" disabled={currentHover.num === 3} onClick={() => { setCurrentHover({ payload: 3 }) }} className={classes.btn}>E-shopy</Button>
<Button size="xl" disabled={currentHover.num === 4} onClick={() => { setCurrentHover({ payload: 4 }) }} className={classes.btn}>Templaty</Button>
</Button.Group>
     </div>
     <WhyUs />
     <DevFlow />
     <Reference />
     <Portfolio />
     <FAQ />
     <CTA />
    </main>
  );
}
