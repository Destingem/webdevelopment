import { Grid, Highlight, List, Mark, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import {SiAdobeillustrator, SiAdobephotoshop, SiApache, SiElectron, SiKalilinux, SiMongodb, SiNextdotjs, SiNginx, SiPandas, SiReact, SiSqlite, SiSurrealdb, SiTensorflow} from "react-icons/si"
import {TbBrandMantine} from "react-icons/tb"
import {SiStrapi} from "react-icons/si"
import {BsUbuntu, BsWordpress} from "react-icons/bs"
import {FaCentos, FaDocker} from "react-icons/fa"
import {DiMysql, DiPython} from "react-icons/di"
let i = true
let tools = [
  {
    label: "Web development",
    img: "",
    sub: [
      { label: "Next.js", img: <SiNextdotjs />, i },
      { label: "React.js", img: <SiReact />, i },
      { label: "Electron.js", img: <SiElectron /> , i },
      { label: "Mantine UI", img: <TbBrandMantine /> },
      { label: "Strapi CMS", img: <SiStrapi /> },
      {label: "Ubuntu server", img: <BsUbuntu />, i},
      {label: "CentOS", img: <FaCentos />},
        {label: "Nginx", img: <SiNginx />, i},
        {label: "Apache", img: <SiApache />},
        {label: "Docker", img: <FaDocker />},
        {label: "SQLite", img: <SiSqlite />},
        {label: "MongoDB", img: <SiMongodb />, i},
        {label: "MySQL", img: <DiMysql />, i},
        {label: "SurrealDB", img: <SiSurrealdb />},
      { label: "Wordpress (headless či menší weby)", img: <BsWordpress />, i },
      { label: "ReactSpring", img: "" },
    ],
  },
  {
    label: "Datová analytika",
    img: "",
    sub: [
      { label: "Python", img: <DiPython />, i },
      { label: "Pandas", img: <SiPandas /> },
      { label: "Sklearn", img: "", i },
      { label: "Matplotlib", img: "" },
      { label: "Tensorflow", img: <SiTensorflow />, i },
  
    ],
  },
  {
    label: "Kybernetická bezpečnost",
    img: "",
    sub: [
      { label: "Kali linux", img: <SiKalilinux />, i },
      { label: "Nmap", img: "" , i},
      { label: "Maltego", img: "", i },
      { label: "Hashcat", img: "", i },
      { label: "Metasploit", img: "" },
      { label: "Nikto", img: "", i },
      { label: "Radare2", img: "" },
  
    ],
  },
  {
    label: "Grafika a zvuk",
    img: "",
    sub: [
      { label: "Adobe Photoshop", img: <SiAdobephotoshop />, i },
      { label: "Adobe Illustrator", img: <SiAdobeillustrator />, i },
      { label: "DaVinci Resolve", img: "" },
      { label: "Cubase", img: "" },
      { label: "Fusion 360", img: "", i },
     
  
    ],
  },
];
export default function Tools({mobile}) {
  const theme = useMantineTheme();
  return (
    <div style={{ width: mobile ? "95%" : "80%" }}>
      <Text component="h2"  color="#22b8cf" align={mobile ? "center" : "left"} size={mobile ? "13vw" : "4rem"} weight={700} >
        V čem pracuji
      </Text>
      <Grid>
        {tools.map(({ label, sub}) => {
          return (
            <Grid.Col span={mobile ? 6 : 3}>
              <Text component="h3"  align={mobile ? "center" : "left"} size={mobile ? "5vw" : "1.5vw"} weight={600} color={theme.colors.blue[8]} sx={{marginBottom: "1vh"}}>{label}</Text>
              <List size="xl" withPadding>
                {sub.map((item) => {
                  return <List.Item icon={  <ThemeIcon color={item.img ? theme.colors.blue[7] : "white"} size={24} radius="xl">{item.img}</ThemeIcon>}>{item.i ? <Mark sx={{borderRadius: "3px", padding: "1px 3px"}}>{item.label}</Mark>: item.label}</List.Item>;
                })}
              </List>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}
