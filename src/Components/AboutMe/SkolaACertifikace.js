import { Divider, Grid, Text } from "@mantine/core"
import Image from "next/image"
let skoly = [{name : "Střední škola Infromatiky, poštovnictví a finančnictví", date: "2018 - 2022", description: "Vzdělání v oboru informační technologie a kybernetická bezpečnost", img : ""}, {name: "SŠ EDUCA Pardubice", date: "2022 - 2024", description: "Vzdělávání v oboru informační technologie a bezpečnost informací", img: ""}]
const souteze = [{name: "6. ročník soutěže v kybernetické bezpečnosti", label: "finalista"}, {name: "7. ročník soutěže v kybernetické bezpečnosti", label: "3. místo v kajském kole, finalista"}]
const certifikace = [
  {
    nazev: "Entrepreneurship 4: Financing and Profitability",
    organizace: "University of Pennsylvania",
    vydano: "březen 2023",
    idPovereni: "https://coursera.org/share/2096c67ccb8ec34e8d8dd14dc780dc9f",
  },
  {
    nazev: "Entrepreneurship 3: Growth Strategies",
    organizace: "University of Pennsylvania",
    vydano: "únor 2023",
  },
  {
    nazev: "Entrepreneurship 2: Launching your Start-Up",
    organizace: "University of Pennsylvania",
    vydano: "prosinec 2022",
    idPovereni: "7b2cb534042dc9cba8d9db0a21ed1b7a",
  },
  {
    nazev: "Entrepreneurship 1: Developing the Opportunity",
    organizace: "University of Pennsylvania",
    vydano: "listopad 2022",
    idPovereni: "4adf9ef1451c096de250d32f50600f75",
  },
  {
    nazev: "Kurz první pomoci",
    organizace: "Učíme první pomoc",
    vydano: "září 2022",
    idPovereni: "090720202201",
  },
  {
    nazev: "CCNAv7: Introduction to Networks",
    organizace: "Cisco Networking Academy",
    vydano: "srpen 2022",
  },
  {
    nazev: "CCNAv7: Switching, Routing, and Wireless Essentials",
    organizace: "Cisco Networking Academy",
    vydano: "srpen 2022",
  },
  {
    nazev: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    organizace: "Udemy",
    vydano: "březen 2022",
    idPovereni: "UC-2efcd4f9-eed6-4f0a-888e-9eb7aa2d1774",
    dovednosti: ["Next.js", "React.js"],
  },
  {
    nazev: "The Complete 2022 Web Development Bootcamp",
    organizace: "Udemy",
    vydano: "listopad 2021",
    idPovereni: "UC-d6ab5cdd-ba9d-4d95-a563-38e2fec49333",
    dovednosti: ["React.js"],
  },
  {
    nazev: "Lean Six Sigma Yellow Belt",
    organizace: "GreyCampus",
    vydano: "březen 2021",
    idPovereni: "2971033226592",
  },
  {
    nazev: "Leading High-Performing Teams",
    organizace: "The University of Queensland",
    vydano: "únor 2021",
    idPovereni: "940c508def2348958c9ce689b0482eab",
  },
  {
    nazev: "GDPR Lite",
    organizace: "Unicorn Academy",
    vydano: "listopad 2020",
  },
  {
    nazev: "Základy digitálního marketingu",
    organizace: "Google Digital Garage",
    vydano: "listopad 2020",
    idPovereni: "BK3 LR3 K59",
    },
    {
    nazev: "Úvod do SW vývoje",
    organizace: "Unicorn Academy",
    vydano: "listopad 2020",
    },
    {
    nazev: "Get Connected",
    organizace: "Cisco Networking Academy",
    vydano: "říjen 2020",
    },
    {
    nazev: "Introduction to Cybersecurity",
    organizace: "Cisco Networking Academy",
    vydano: "říjen 2020",
    },
    {
    nazev: "Kurz - Základní práva",
    organizace: "Univerzita Palackého v Olomouci",
    vydano: "říjen 2020",
    },
    ];

export default function SkolaACertifikace(){

    return(
        <div style={{width: "80%"}}>
        <Divider size="sm" color="#000"  label={<Text size={"xl"} >Vzdělání</Text>} />
        <div style={{display: "flex", flexDirection: "column", gap: "5vh", marginTop: "5vh"}}>
        {skoly.map(({name, date, description, img})=> {
  
  return(
    <div style={{display: "flex"}}>
    <div>
    <Text size={"xl"} weight={700}>{name}</Text>
      <Text size={"md"} weight={400}>{date}</Text>
      <Text size={"sm"} weight={400}>{description}</Text>
    </div>
      <Image />
    </div>
  )
  
  })}
        </div>
        <Divider size="sm" color="#000" sx={{marginTop: "5vh"}}  label={<Text size={"xl"} >Certifikace</Text>} />
        <Grid style={{  marginTop: "5vh"}}>
        {certifikace.map(({nazev, organizace, description, img, vydano})=> {
  
  return(
    <Grid.Col span={6} style={{display: "flex"}}>
    <div>
    <Text size={"xl"} weight={700}>{nazev}</Text>
      <div>
      <Text size={"md"} weight={400}>{vydano}</Text>
      <Text size={"md"} weight={400}>{organizace}</Text>
      </div>
      <Text size={"sm"} weight={400}>{description}</Text>
    </div>
      <Image />
    </Grid.Col>
  )
  
  })}
        </Grid>
        <Divider size="sm" color="#000" sx={{marginTop: "5vh"}}  label={<Text size={"xl"} >Soutěže</Text>} />
        <div style={{display: "flex", flexDirection: "column", gap: "5vh", marginTop: "5vh"}}>
        {souteze.map(({name, date, label, img})=> {
  
  return(
    <div style={{display: "flex"}}>
    <div>
    <Text size={"xl"} weight={700}>{name}</Text>
      <Text size={"md"} weight={400}>{label}</Text>
    </div>
      <Image />
    </div>
  )
  
  })}
        </div>
        </div>
    )
}