import { Blockquote, Button, Card, Flex, Grid, Group, Text } from "@mantine/core";
import Image from "next/image";
import YourPhoto from "../../../public/images/profile.jpg"; // Replace with the correct path to your photo
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from 'framer-motion';
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";
import MyTimeline from "./MyTimeline";
import MyPeople from "./MyPeople";

const we = [
  {
    name: "Ing. Jiří Sedláček",
    job: "Cyber security",
    image: YourPhoto,
    description: "Vystudoval Kybernetickou bezpečnost na VUT v Brně. Při našem vývoji zajištuje bezpečnost našich aplikací",
    button: { text: "Více o Jiřím", href: "/o-nas" },
  },
  {
      name: "Tomáš Bauer",
      job: "Developer",
      image: YourPhoto,
      description: "Studuje kybernetickou bezpečnost a podílí se na tvorbě webových stránek",
      button: { text: "Více o mě", href: "/" },
    },
    {
      name: "Rudolf Trenčanský",
      job: "Developer",
      image: YourPhoto,
      description: "Rudu už od mala baví programování a celkově kreativní práce, do týmu nám přispívá svým nekonvenčním pohledem. V současné době se věnuje studiu Informačních technologií",
      button: { text: "Více o mě", href: "/" },
    },
    {
      name: "Štěpán Kala",
      job: "Developer",
      image: YourPhoto,
      description: "Rudu už od mala baví programování a celkově kreativní práce, do týmu nám přispívá svým nekonvenčním pohledem. V současné době se věnuje studiu Informačních technologií",
      button: { text: "Více o mě", href: "/" },
    },
    {
      name: "Martin Kotlík",
      job: "Designer",
      image: YourPhoto,
      description: "Rudu už od mala baví programování a celkově kreativní práce, do týmu nám přispívá svým nekonvenčním pohledem. V současné době se věnuje studiu Informačních technologií",
      button: { text: "Více o mě", href: "/" },
    },
    
];

export default function AboutUs() {
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;



  

  return (
    <div style={{ width: '100%', position: "relative"}}>
     
    <div style={{ width: '100%', display: 'flex', backgroundColor: "#e9f8fa", flexDirection: "column", paddingTop: "3vh"}}>
   
    <Text component="h2" color="#22b8cf" align="center" size={mobile ? "12vw" : "4vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}>
            Jmenuji se Ondřej a jsem webový vývojář
            </Text>
 <Text component="p"  align="center" size={"xl"} sx={{maxWidth: mobile ? "90%" : "50%", textAlign: "left", margin: "0 auto 2vh auto"}} >
  Jsem web developer, kterého
baví kybernetická bezpečnost.
Ve volném čase se vzdělávám
v KB, programování a dalších
oborech, sportovně střílím z
pušky, vedu táborový oddíl a
upravuji zvuk.
  </Text>
{mobile ? null : <MyTimeline/>}
    <MyPeople mobile={mobile} we={we}/>
      </div>
      <div class="custom-shape-divider-bottom-1682269177">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
}
