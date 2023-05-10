import { Card, List, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import Info from "./Info";
import { BsCheckCircleFill } from "react-icons/bs";
import {MdMonitorHeart, MdSecurity, MdSupport} from "react-icons/md";
import { AiOutlineAppstoreAdd, AiOutlineSetting } from "react-icons/ai";
import {BiTestTube} from "react-icons/bi";
import Security from "./Security";
import Design from "./Design";
import Functionality from "./Functionality";
import Optimalization from "./Optimalization";
export function FeatureListItem({heading, children, icon, color}){
  const theme = useMantineTheme();
  return(
    <List.Item icon={<ThemeIcon
      size={32}
      radius="xl"
      color={theme.colors[color][6]}
      >{icon}</ThemeIcon> } >
    <div style={{display: "flex", flexWrap: "nowrap"}}>
    <Text>
    
   
    <Text size={"lg"}> <strong>{heading}</strong>  {children}</Text>
    </Text>
    </div>
    </List.Item>
  )
}

export default function WhyUs() {
  const theme = useMantineTheme();
  const info = useVisitorData();
  console.log(info);
  
  
  return (
    <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "2vh" }}>
      <Text align="center" size="6vw" color={theme.colors.cyan[7]}>
        Proč si vybrat nás?
      </Text>
    <Security />  
    <Design />
    <Functionality />
    <Optimalization />
    </div>
  );
}
