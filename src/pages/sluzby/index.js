import { Text, Image, useMantineTheme, SimpleGrid, Button, createStyles } from "@mantine/core";
import FirstScreen from "../../Components/UI/FirstScreen";
import Overview from "../../Components/Services/OverView";
import { useEffect, useReducer } from "react";
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
import { useViewportSize } from "@mantine/hooks";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [currentHover, setCurrentHover] = useReducer(stateReducer,  {num:1, text: "Webové stránky a aplikace"});
  const theme = useMantineTheme();
  const {classes} = useStyles();
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;
useEffect(()=> {
  var selected = 0
  
 switch (router.query.sluzba) {
  case "web":
    selected = 1;
    break;
  case "desktop":
    selected = 2;
    break;
  case "eshop":
    selected = 3;
    break;
  case "template":
    selected = 4;
    break;
 
  default:
    break;
 }
  setCurrentHover({payload: selected})
  console.log(router.query.sluzba);
}, [router.query.sluzba])
  return (
   <>
  <NextSeo
      title="Mé služby | Ondřej Zaplatílek"
      description="Tvoříme solidní webové stránky a aplikace. Od jednoduchých Wordpress stránek až po pokročilé Next.js a Electron aplikace. Realizujte své projekty s námi a získajte moderní, bezpečné a uživatelsky přívětivé řešení pro vaše podnikání"
    />
<main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        marginTop: "10vh",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: mobile ? "column" : "row",
          justifyContent: "space-between",
          marginTop: "2vh",
          gap: "2vw",
          padding: "0 2vw",
        }}
      >
        <Text style={{ maxWidth: mobile ? "95%" : "60%" }} size={mobile ? "10vw" :"6vw"}>
          Vytvořme spolu vaši aplikaci
        </Text>
        <div style={{ padding: "5vh 5vw", marginLeft: "20vw" }}>
          <Image
            src="/image/website.svg"
            sx={{
              marginLeft: "-20vw",
              marginBottom: "-20vh",
              backgroundColor: theme.colors.cyan[2],
            }}
          />
          <Image
            src="/image/shop.svg"
            fill
            sx={{ backgroundColor: theme.colors.dark[2], zIndex: 20 }}
          />
        </div>
      </div>
      <Text style={{ maxWidth: mobile ? "90%" : "60%" }} size={mobile ? "6vw" :"2vw"}>
        Tvořím profesionální webové stránky a aplikace v Next.js,
        Wordpress a Electron. Jsme připraven
        pomoci vám realizovat vaše projekty a vytvořit moderní stránky a
        aplikace, které přitahují pozornost vašich zákazníků.
      </Text>
      <Text component="h2" color="#22b8cf" align="center" size={mobile ? "10vw" : "4vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out",  marginTop: "3vh" }}>
            O čem se chete dozvědět více?
            </Text>
     <Overview mobile={mobile} currentHover={currentHover} setCurrentHover={setCurrentHover}/>
     <div style={{maxWidth: "80%", display: "flex", flexDirection: "column", marginTop: "-5vh", gap: "2vh"}}>
      {currentHover.num === 1 && <WebAplikace mobile={mobile} />}
      {currentHover.num === 2 && <DesktopAplikace mobile={mobile} />}
      {currentHover.num === 3 && <Eshopy mobile={mobile} />}
      {currentHover.num === 4 && <Templaty mobile={mobile} />}
   
{!mobile && <Button.Group>
<Button size="xl" disabled={currentHover.num === 1} onClick={() => { setCurrentHover({ payload: 1 }) }} className={classes.btn}>Webové stránky a aplikace</Button>
<Button size="xl" disabled={currentHover.num === 2} onClick={() => { setCurrentHover({ payload: 2 }) }} className={classes.btn}>Desktop aplikace</Button>
<Button size="xl" disabled={currentHover.num === 3} onClick={() => { setCurrentHover({ payload: 3 }) }} className={classes.btn}>E-shopy</Button>
<Button size="xl" disabled={currentHover.num === 4} onClick={() => { setCurrentHover({ payload: 4 }) }} className={classes.btn}>Templaty</Button>
</Button.Group>}
{mobile && <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
  <Button fullWidth size="md" disabled={currentHover.num === 1} onClick={() => { setCurrentHover({ payload: 1 }) }} className={classes.btn}>1. Webové stránky a aplikace</Button>
<Button fullWidth size="md" disabled={currentHover.num === 2} onClick={() => { setCurrentHover({ payload: 2 }) }} className={classes.btn}>2. Desktop aplikace</Button>
<Button fullWidth size="md" disabled={currentHover.num === 3} onClick={() => { setCurrentHover({ payload: 3 }) }} className={classes.btn}>3. E-shopy</Button>
<Button fullWidth size="md" disabled={currentHover.num === 4} onClick={() => { setCurrentHover({ payload: 4 }) }} className={classes.btn}>4. Templaty</Button>
</div>}
     </div>
     <WhyUs mobile={mobile} />
     <DevFlow mobile={mobile} />
     <Reference mobile={mobile} />
     <Portfolio mobile={mobile} />
     <FAQ mobile={mobile} />
     <CTA mobile={mobile}/>
    </main>
   </>
  );
}
