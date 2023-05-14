import { Container, Grid, Paper, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import WebPhoto from "../../../public/image/webDevelopment.png";
import WebDevelopment from "../../../public/image/websiteDevelopment.png";
import DesktopDevelopment from "../../../public/image/desktopDevelopment.png";
import Prototyping from "../../../public/image/prototyping.png";
import Blockchainari from "../../../public/image/blockchainari.png";
import { MdArrowForward } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { useReducer, useState } from "react";

const borderAnimationBottomStyle = {
  content: '""',
  position: 'absolute',
  backgroundColor: '#22b8cf',
  transition: 'all 0.3s',
  width: '0',
  height: '3px',
  left: '50%',
  bottom: '0'
};
const borderAnimationBottomHoverStyle = {
  width: '100%',
  left: '0'
};
const arrowAnimationStyle = {
  position: 'absolute',
  opacity: 0,
  transition: 'all 0.3s',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 300,
};

const arrowAnimationHoverStyle = {
  opacity: 1,
  top: '90%',
  zIndex: 300,
};
export default function Overview({currentHover, setCurrentHover, mobile}) {
  let services = [
    {
      key: 1,
      image: WebDevelopment,
      name: "Webové stránky a aplikace",
      href: "/services",
      description: "",
    },
    {
      key: 2,
      image: Blockchainari,
      name: "Desktop aplikace",
      href: "/services",
      description: "",
    },
    {
      key: 3,
      image: DesktopDevelopment,
      name: "Eshopy",
      href: "/services",
      description: "",
    },
    {
      key: 4,
      image: Prototyping,
      name: "Templaty",
      href: "/services",
      description: "",
    },
  ];

  const router = useRouter();
  return (
    <div style={{ width: mobile ? "95%" :"80%", minHeight: "50vh", padding: "8vh 0 11vh 0", margin: "0 auto" }}>
      <Grid sx={{ width: "100%", margin: "0 auto" }}>
        {services.map((service) => {
          let { image, name, description, href, key } = service;
         

          return (
            <Grid.Col
  className="service-title"
  span={mobile ? 6 : 3}
  sx={{ textAlign: "center", borderRadius: "3px", cursor: "pointer" }}
  onMouseEnter={() => setCurrentHover({ payload: key })}

>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1/1",
                  position: "relative",
                 
                  transition: "borderBottom 0.3s ease-in-out",
                }}
               
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  style={{
                    borderRadius: "3px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    overflow: "hidden",
                  }}
                />
           

<div  style={
      currentHover.num === key
        ? { ...borderAnimationBottomStyle, ...borderAnimationBottomHoverStyle }
        : borderAnimationBottomStyle
    } ></div>

<div  style={
      currentHover.num === key
        ? { ...arrowAnimationStyle, ...arrowAnimationHoverStyle }
        : arrowAnimationStyle
    }>
  <SlArrowDown size={mobile ? 48 : 96} color="#22b8cf" />
</div>

                <Text
                  size={mobile ? "5vw" :"1.5vw"}
                  component="a"
                  weight={600}
                  color="#808080"
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    whiteSpace: mobile ? "normal" : "nowrap",
                    opacity: currentHover.num !== key ? " 1" : " 0",
                   
                  }}
                
                >
                  {service.name}
                </Text>
              </div>
            </Grid.Col>
          );
        })}
      </Grid>
    
    <Text component="h2"  color="#22b8cf" align={mobile ? "center" : "left"} size={mobile ? "10vw" : "4vw"} weight={700} sx={{  marginTop: "2vh",  transition: "all 0.3s ease-in-out", }}>
  {currentHover.text}
</Text>
    </div>
  );
}
