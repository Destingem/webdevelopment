import { Container, Grid, Paper, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import WebPhoto from "../../../public/images/webDevelopment.png";
import WebDevelopment from "../../../public/images/websiteDevelopment.png";
import DesktopDevelopment from "../../../public/images/desktopDevelopment.png";
import Prototyping from "../../../public/images/prototyping.png";
import Blockchainari from "../../../public/images/blockchainari.png";
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
export default function Overview() {
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
  function stateReducer(state, action) {
    switch (action.payload) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3 ;
      case 4:
        return 4;
      default:
        return state;
    }
  }
  
  const [currentHover, setCurrentHover] = useReducer(stateReducer,  1);
  const router = useRouter();
  return (
    <div style={{ width: "80%", minHeight: "50vh", padding: "8vh 0 11vh 0" }}>
      <Grid sx={{ width: "100%" }}>
        {services.map((service) => {
          let { image, name, description, href, key } = service;
          console.log(currentHover);
          console.log(key);

          return (
            <Grid.Col
  className="service-title"
  span={3}
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
                onClick={() => {
                  router.push(href);
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
      currentHover === key
        ? { ...borderAnimationBottomStyle, ...borderAnimationBottomHoverStyle }
        : borderAnimationBottomStyle
    } ></div>

<div  style={
      currentHover === key
        ? { ...arrowAnimationStyle, ...arrowAnimationHoverStyle }
        : arrowAnimationStyle
    }>
  <SlArrowDown size={96} color="#22b8cf" />
</div>

                <Text
                  size="1.5vw"
                  component="a"
                  weight={600}
                  color="#808080"
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    whiteSpace: "nowrap",
                    opacity: currentHover !== key ? " 1" : " 0",
                   
                  }}
                  onClick={() => {
                    router.push(href);
                  }}
                >
                  {service.name}
                </Text>
              </div>
            </Grid.Col>
          );
        })}
      </Grid>
    
    <Text color="#22b8cf" align="center" size={"4rem"} weight={700} sx={{  marginBottom: "3rem",  transition: "all 0.3s ease-in-out", }}>
  {currentHover}
</Text>
    </div>
  );
}
