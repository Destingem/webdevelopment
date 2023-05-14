import { Divider, Grid, Text } from "@mantine/core";
import FirstScreen from "../Components/UI/FirstScreen";
import Stats from "../Components/AboutMe/Stats";
import Image from "next/image";
import SkolaACertifikace from "../Components/AboutMe/SkolaACertifikace";
import Tools from "../Components/AboutMe/Tools";
import CTA from "../Components/AboutMe/CTA";
import { useViewportSize } from "@mantine/hooks";
import { NextSeo } from "next-seo";
export default function Sluzby() {
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;
  return (
    <>
      <NextSeo
        title="Kdo jsem? | Ondřej Zaplatílek"
        description="Jsem zkušený web developer specializující se na Next.js a React.js. S širokou škálou dovedností včetně kybernetické bezpečnosti a datové analytiky, nabízím kvalitní služby v oblasti vývoje webových aplikací. Mrkněte se na mé stránky a případně mě kontaktujte pro více informací."
      />
      <main
        className="flex min-h-screen flex-col items-center justify-between"
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "flex-start",
          gap: "5vh",
        }}
      >
        <FirstScreen>Kdo jsem?</FirstScreen>
        <div
          style={{
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            maxWidth: "80%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5vh",
          }}
        >
          <Text
            weight={400}
            size={mobile ? "6vw" : "2vw"}
            sx={{ width: mobile ? "95%" : "50%" }}
          >
            Jsem web developer, kterého baví kybernetická bezpečnost. Ve volném
            čase se vzdělávám v KB, programování a dalších oborech, sportovně
            střílím z pušky, vedu táborový oddíl a upravuji zvuk.
          </Text>
          <Stats mobile={mobile} />
        </div>
        <SkolaACertifikace />
        <Tools mobile={mobile} />
        <CTA mobile={mobile} />
      </main>
    </>
  );
}
