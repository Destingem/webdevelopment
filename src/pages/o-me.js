import { Divider, Grid, Text } from "@mantine/core";
import FirstScreen from "../Components/UI/FirstScreen";
import Stats from "../Components/AboutMe/Stats";
import Image from "next/image"
import SkolaACertifikace from "../Components/AboutMe/SkolaACertifikace";
import Tools from "../Components/AboutMe/Tools";
import CTA from "../Components/AboutMe/CTA";

export default function Sluzby() {

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
        gap: "5vh"
      }}
    >
      <FirstScreen>Kdo jsem?</FirstScreen>
      <div
        style={{
          display: "flex",
          maxWidth: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5vh"
        }}
      >
        <Text weight={400} size={"2vw"} sx={{ width: "50%" }}>
          Jsem web developer, kterého baví kybernetická bezpečnost. Ve volném
          čase se vzdělávám v KB, programování a dalších oborech, sportovně
          střílím z pušky, vedu táborový oddíl a upravuji zvuk.
        </Text>
      <Stats/>
      </div>
<SkolaACertifikace />
<Tools />
<CTA />
    </main>
  );
}
