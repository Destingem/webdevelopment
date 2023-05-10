import { useState } from "react";
import { Text, createStyles, useMantineTheme } from "@mantine/core";
import Polystyrensypany from "../../../public/images/polystyrensypany.png"; // "../../../public"
import Image from "next/image";
import Link from "next/link";
let projects = [
  { name: "Polystyren sypaný", year: "2022", img: Polystyrensypany, video: "", href: "/portfolio/polystyrensypany" },
  { name: "Desktop aplikace pro tetovací studio", year: "2023", img: "", video: "", href: "/portfolio/" },
  { name: "Artilea Counter", year: "2023", img: "", video: "", href: "/portfolio/"},
  {name: "Eshop Artilea.eu", year: "2023", img: "", video: "", href: "/portfolio/"},
  {name: "Web Vinarstvibadin.cz", year: "2022", img: "", video: "", href: "/portfolio/"},
  {name: "Web ITEAD.cz", year: "2021", img: "", video: "", href: "/portfolio/"},
].reverse().sort((a, b) => b.year - a.year);


function HoverCard({ project, mouseX, mouseY }) {


  const { img, video } = project;

  // You can add conditions to render either photo or video based on the project data
  return (
    <div
      style={{
        position: "fixed",
        left: mouseX,
        top: mouseY,
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        pointerEvents: "none",
        zIndex: 1000,
        minWidth: img || video ? "15%" : 0,
        minHeight: img || video ? "15%" : 0,
        cursor: "pointer !important"
      }}
    >
      {img && <Image src={img} alt="Project" fill />}
      {video && <video src={video} alt="Project" />}
    </div>
  );
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX + 10, y: e.clientY + 10 });
  };


  const useStyles = createStyles((theme) => ({
    btn: {
      backgroundSize: '200% 100%',
      backgroundPosition: 'right bottom',
      backgroundColor: 'transparent',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        backgroundPosition: 'left bottom',
        backgroundImage: 'linear-gradient(to right, #e9f8fa 50%, transparent 50%)',
        transition: 'all 0.3s ease-in-out',
      },
    
    },
  }));
  
   const {classes} = useStyles();
   const theme = useMantineTheme()

  return (
    <div style={{ margin: "3vh 0", }}>
              <Text sx={{}} align="center" size="6vw" color={theme.colors.cyan[7]}>
        Mé projekty
      </Text>
           <div style={{width: "100%", minWidth: "70vw", marginTop: "5vh" }}>
        {projects.map((project, index) => {
          return (
            <Link
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
              onMouseMove={handleMouseMove}
              href={project.href}
              style={{
                display: "flex",
                cursor: "pointer",
                borderTop: index === 0 ? "3px solid #333" : "",
                borderBottom: "3px solid #333",
                gap: "2vw",
              }}
            >
               <Text component="h3" color="#333" align="left" size={"2.5rem"} weight={500} sx={{   transition: "all 0.3s ease-in-out",  padding: "2vh 0"}}>
            {project.year}
            </Text>
    <Text component="h3" color="#333" align="left" size={"2.5rem"} weight={500} sx={{   transition: "all 0.3s ease-in-out", width: "100%", padding: "2vh 0"}}>
            {project.name}
            </Text>
            </Link>
          );
        })}
        <Link
        href="/portfolio"
            className={classes.btn}
              onMouseMove={handleMouseMove}
              style={{
                display: "flex",
                cursor: "pointer",
                borderTop: "",
                borderBottom: "3px solid #333",
                gap: "2vw",
              
              }}
            >
             
         
    <Text component="h3" color="#333" align="center" size={"2.5rem"} weight={500} sx={{   transition: "all 0.3s ease-in-out", width: "100%", padding: "2vh 0"}}>
            Zjistit více
            </Text>
            </Link>
        {hoveredIndex !== -1 && (
          <HoverCard
            project={projects[hoveredIndex]}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
          />
        )}
      </div>
    </div>
  );
}
