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
import { Carousel } from "@mantine/carousel";
import { useViewportSize } from "@mantine/hooks";
export function FeatureListItem({heading, children, icon, color}){
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;
  const theme = useMantineTheme();
  return(
    <List.Item icon={<ThemeIcon
      size={32}
      radius="xl"
      color={theme.colors[color][6]}
      >{icon}</ThemeIcon> } >
    <div style={{display: "flex", flexWrap: "nowrap"}}>
    <Text>
    
   
    <Text size={mobile ? "sm" : "lg"}> <strong>{heading}</strong>  {children}</Text>
    </Text>
    </div>
    </List.Item>
  )
}

export default function WhyUs({mobile}) {
  const theme = useMantineTheme();
  const info = useVisitorData();
  console.log(info);
  
  
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "2vh", padding: "0 2vw" }}>
      <Text align="center" size="6vw" color={theme.colors.cyan[7]}>
        Proč si vybrat nás?
      </Text>
 {!mobile && <>
  <Security />  
    <Design />
    <Functionality />
    <Optimalization />
 </>}
 {mobile && <Carousel slideSize="100%" height={"100%"} slideGap="md" loop withIndicators    breakpoints={[
        { maxWidth: 'md', slideSize: '100%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}>
   <Carousel.Slide><Security mobile={mobile} />  </Carousel.Slide>
   <Carousel.Slide><Design mobile={mobile} /> </Carousel.Slide>
   <Carousel.Slide> <Functionality mobile={mobile} /></Carousel.Slide>
   <Carousel.Slide><Optimalization mobile={mobile} /></Carousel.Slide>
 </Carousel>}
    </div>
  );
}
