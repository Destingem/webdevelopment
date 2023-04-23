import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
  UnstyledButton,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";


export default function Navbar({motion}) {
  const links = [
    { title: "O mě", href: "/o-me" },
    { title: "Služby", href: "/sluzby" },
    { title: "Portoflio", href: "/portfolio" },
    {title: "Blog", href: "/blog"},
    { title: "Kontakt", href: "/kontakt" },
  ];
  var theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();
  const useStyles = createStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: theme.spacing.xl,
      display: "flex",
      alignItems: "center",
      minHeight: "8vh",
      backgroundColor: "transparent",
      justifyContent: "center",
      zIndex: 1000,
      transition: "all 0.3s ease-in-out",
      
    },
    wrapper: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
    },
    logoContainer: {
      display: "flex",
      alignItems: "flex-end",
      gap: theme.spacing.xs,
      
    },
    logo: {
      marginRight: theme.spacing.md,
      fontSize: theme.spacing.xl * 1.5,
      color: "#545454",
    },
    linksContainer: {
      display: "flex",
      gap: theme.spacing.xl,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    link: {
      position: "relative",
      marginLeft: theme.spacing.md,
      color: theme.colors.dark[8],
      whiteSpace: "nowrap",
      fontSize: theme.spacing.xl * 0.8,
      fontWeight: 500,
      ":hover": {
        color: theme.colors.dark[4],
      },
      ":hover $linkHover": {
        opacity: 1,
      },
    },
    linkHover: {
      position: "absolute",
      bottom: -4,
      left: 0,
      height: 2,
      backgroundColor: theme.colors.dark[4],
      opacity: 0,
      width: "100%",
      transition: "opacity 0.3s ease-in-out",
    },
  }));

  const { classes } = useStyles();
  console.log(scroll);
  return (
    <div className={classes.wrapper}>
      <Paper
        className={classes.root}
        shadow="none"
        sx={
          !scroll.y < 1
            ? {
                backgroundColor: theme.colors.cyan[5],
                borderBottom: "3px solid #545454",
              }
            : { borderBottom: "3px solid transparent" }
        }
      >
        <div style={{ width: "80%" }}>
          <Grid gutter="lg" w={"100%"}>
            <Grid.Col span={6}>
              <div className={classes.logoContainer}>
                <Image src={Logo} width={50} height={50} />
                <div style={{padding: 0}}>
                <Text size="xl" weight={600}>
                  ndřej
                </Text>
                <Text size="xl" weight={600}>
                  aplatílek
                </Text>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col
              span={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div className={classes.linksContainer}>
                {links.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <Text className={classes.link}>
                      {link.title}
                      <motion.div className={classes.linkHover} />
                    </Text>
                  </Link>
                ))}
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
