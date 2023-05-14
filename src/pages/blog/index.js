import { Container, Grid, Group, Image, Space, Text } from "@mantine/core";
import FirstScreen from "../../Components/UI/FirstScreen";
import { useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { useViewportSize } from "@mantine/hooks";
import { NextSeo } from "next-seo";

export default function Blog() {
  const posts = [
    {
      img: "/image/gradient.webp",
      title: "Spuštění nového webu",
      description:
        "Dnes jsem spustil svůj nový web, který je postavený na Next.js a Mantine.",
      text: "Dnes jsem spustil svůj nový web, který je postavený na Next.js a Mantine. a je super, je napojený na Strapi CMS, optimalizovaný pro SEO a responsivní, stejný můžete mít za 30 000 Kč",
      date: "středa, 14. dubna 2021",
    },
    {
      img: "/image/polystyrensypany.png",
      title: "Spuštění nového webu",
      description:
        "Dnes jsem spustil svůj nový web, který je postavený na Next.js a Mantine.",
      text: "Dnes jsem spustil svůj nový web, který je postavený na Next.js a Mantine. a je super, je napojený na Strapi CMS, optimalizovaný pro SEO a responsivní, stejný můžete mít za 30 000 Kč",
      date: "středa, 14. dubna 2021",
    },
  ];

  function BlogCard({ img, title, description, date, text }) {
    const [clicked, setIsClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hoverTimeout = useRef(null);
    const { height, width } = useViewportSize();
    let mobile = width < 768 ? true : false;

    const handleMouseEnter = () => {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setHovered(true);
      }, 200);
    };

    const handleMouseLeave = () => {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setHovered(false);
      }, 200);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          width: "100%",
          gap: "2vw",
          textAlign: "left",
          justifyContent: "center",
          alignItems: mobile ? "center" : "",
          marginRight: !mobile && hovered ? "10vw" : "auto",
          marginLeft: !mobile && hovered ? "-10vw" : "auto",
          transition: "margin-right 1s, margin-left 1s",
        }}
      >
        <div
          style={{
            backgroundImage: "url(" + img + ")",
            minWidth: mobile ? "90%" : "15%",
            aspectRatio: mobile ? 2 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: mobile ? "80%" : "15%",
            textAlign: "center",
            color: "#22b8cf",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: mobile ? "flex-start" : "",
          }}
        >
          <Text weight={600} size={mobile ? "6vw" : "2vw"}>
            {title}
          </Text>
          <Text weight={400} size={"1.5vw"}>
            {clicked ? text : description}
          </Text>
          <Group>
            <Text
              sx={{ cursor: "pointer", marginTop: "auto" }}
              onClick={() => {
                setIsClicked((clicked) => {
                  return !clicked;
                });
              }}
            >
              {clicked ? "Méně" : "Více"}
            </Text>
            <Text align="center" weight={600}>
              {date}
            </Text>
          </Group>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Link href="/vyvoj">
            <BsChevronRight
              style={{ transition: "all 0.3s" }}
              color={hovered ? "#22b8cf" : "#c7caca"}
              size={"2.5vw"}
            />
          </Link>
          <Text
            color="#22b8cf"
            weight={700}
            size={"1.5vw"}
            style={{
              position: "absolute",
              left: "150%",
              opacity: hovered ? 1 : 0,
              whiteSpace: "nowrap",
              transition: "opacity 0.5s ease-in-out",
              cursor: "pointer",
            }}
          >
            Celý článek
          </Text>
        </div>
      </div>
    );
  }

  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;

  return (
   <>
  <NextSeo
      title=" Blog o Web Developmentu a Technologiích | Ondřej Zaplatílek"
      description="Přečtěte si nejnovější články a příspěvky od Ondřeje Zaplatílka, zkušeného web developera. Důkladné analýzy, výukové materiály a aktuální trendy v oblasti web developmentu a technologií."
    />
<main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <FirstScreen>Blog</FirstScreen>
      <Space h={"5vh"} />
      <Container size={mobile ? "100%" : "60%"} sx={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "2vh",
            flexDirection: "column",
            alignItems: "center",
          }}
          align="center"
        >
          {posts.map((post) => {
            return <BlogCard {...post} />;
          })}
        </div>
      </Container>
    </main>
   </>
  );
}
