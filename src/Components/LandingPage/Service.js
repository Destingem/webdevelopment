import { Container, Grid, Paper, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import WebPhoto from "../../../public/images/webDevelopment.png";
import WebDevelopment from "../../../public/images/websiteDevelopment.png";
import DesktopDevelopment from "../../../public/images/desktopDevelopment.png";
import Prototyping from "../../../public/images/prototyping.png";
import Blockchainari from "../../../public/images/blockchainari.png";
import { MdArrowForward } from "react-icons/md";
import { useReducer, useState } from "react";
import { useViewportSize } from "@mantine/hooks";
export default function Services() {
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;
  let services = [
    {
      key: 1,
      image: WebDevelopment,
      name: "Webové stránky",
      href: "/services",
      description: "",
    },
    {
      key: 2,
      image: Blockchainari,
      name: "Webové aplikace",
      href: "/services",
      description: "",
    },
    {
      key: 3,
      image: DesktopDevelopment,
      name: "Desktop aplikace",
      href: "/services",
      description: "",
    },
    {
      key: 4,
      image: Prototyping,
      name: "Grafický návrh",
      href: "/services",
      description: "",
    },
  ];
  function stateReducer(state, action) {
    switch (action.payload) {
      case 1:
        return "Vyvíjím weby";
      case 2:
        return "Vyvíjím webové aplikace";
      case 3:
        return "Vyvíjím desktopové aplikace";
      case 4:
        return "Tvořím grafické návrhy";
      default:
        return state;
    }
  }
  
  const [currentHover, setCurrentHover] = useReducer(stateReducer,  "Vyvíjíme ...");
  const router = useRouter();
  return (
    <div style={{ width: mobile ? "100%" : "80%", minHeight: "50vh", padding: mobile ? "2vh 5vw" : "8vh 0 11vh 0" }}>
     <Text component="h2" color="#22b8cf" align="center" size={mobile ? "12vw" : "4vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}>
     {currentHover}
            </Text>
      <Grid sx={{ width: "100%" }}>
        {services.map((service) => {
          let { image, name, description, href, key } = service;
          return (
            <Grid.Col
  className="service-title"
  span={mobile ? 6 : 3}
  sx={{ textAlign: "center", borderRadius: "3px", cursor: "pointer" }}
  onMouseEnter={() => setCurrentHover({ payload: key })}
  onMouseLeave={() => setCurrentHover({ payload: null })}
>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1/1",
                  position: "relative",
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
               <div className="border-animation-top"></div>
<div className="border-animation-right"></div>
<div className="border-animation-bottom"></div>
<div className="border-animation-left"></div>
<div className="arrow-animation" style={{ opacity: 0}}>
  <MdArrowForward size={96} color="#22b8cf" />
</div>

                <Text
                  size={mobile ? "5vw" :"1.5vw"}
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
    </div>
  );
}
