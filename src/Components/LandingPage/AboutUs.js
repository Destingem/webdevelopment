import { Blockquote, Button, Card, Flex, Grid, Group, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import YourPhoto from "../../../public/image/profile.jpg"; // Replace with the correct path to your photo
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
  const theme = useMantineTheme();


  

  return (
    <div style={{ width: '100%', position: "relative"}}>
     
    <div style={{ width: '100%', display: 'flex', backgroundColor: "#e9f8fa", flexDirection: "column", paddingTop: "3vh"}}>
   
    <Text component="h2" color="#22b8cf" align="center" size={mobile ? "12vw" : "4vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}>
            Jmenuji se Ondřej a jsem webový vývojář
            </Text>
 <Text component="p"  align="center" size={"1vw"} sx={{maxWidth: mobile ? "90%" : "60%", textAlign: "left", margin: "0 auto 2vh auto"}} >

 <Text color={theme.colors.cyan[6]}>Vítejte na mém webu! Jmenuji se Ondřej Zaplatílek a jsem profesionální webový vývojář se specializací na kybernetickou bezpečnost. Mým cílem je vytvářet bezpečné a efektivní digitální řešení, které pomáhají podnikům a jednotlivcům dosáhnout svých cílů.</Text>
<br />
<Text color={theme.colors.cyan[9]}>Mé vzdělání zahrnuje studium na SŠIPF Brno, kde jsem se specializoval na  kybernetickou bezpečnost. Nyní pokračuji ve studiu na SŠ EDUCA v Pardubicích, kde se věnuji oboru informační technologie a bezpečnost informací.</Text>
<br />
<Text color={theme.colors.cyan[9]}>Během svého vzdělávacího putování jsem získal řadu certifikací, včetně kurzů o podnikání od University of Pennsylvania, kurzů první pomoci, certifikace CCNAv7 od Cisco Networking Academy a různých kurzů o webovém vývoji a digitálním marketingu.</Text>
<br />
<Text color={theme.colors.cyan[9]}>Jsem hrdý na to, že jsem byl finalistou v 6. a 7. ročníku soutěže v kybernetické bezpečnosti, což mi umožnilo prohloubit své dovednosti a znalosti v této oblasti.</Text>
<br />
<Text color={theme.colors.cyan[9]}>Ve své práci se zaměřuji na vývoj webových aplikací pomocí technologií jako jsou Next.js, React.js a Electron.js. Mám zkušenosti s řadou databázových systémů, včetně SQLite, MongoDB a MySQL, a pracuji s různými operačními systémy a webovými servery, jako jsou Ubuntu server, CentOS, Nginx a Apache.</Text>
<br />
<Text color={theme.colors.cyan[9]}>Věnuji se také datové analytice, kde využívám Python a nástroje jako Pandas, Sklearn a Tensorflow. Kybernetická bezpečnost je další z mých klíčových dovedností, kde se mi osvědčily nástroje jako Kali Linux, Nmap, Maltego a Metasploit.</Text>

<br />
<strong>Přesvědčte se o kvalitě</strong> mé práce prohlídkou mého portfolia a neváhejte se se mnou spojit, pokud máte zájem o mé služby. Těším se na spolupráci s vámi a na to, abych vám pomohl oživit váš digitální svět!
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
