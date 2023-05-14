
import React from "react";
import {
  Container,
  Grid,
  Col,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
  Group,
  Button,
  Space,
} from "@mantine/core";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MeSyntax from "./MeSyntax";
import { motion } from "framer-motion";

export default function Footer() {
  const theme = useMantineTheme();
  const useStyles = createStyles((theme) => ({
    main: {
      borderRadius: "60px 60px 0 0",
      backgroundColor: "#232323",
      position: "sticky",
      bottom: 0,
      left: 0,
      width: "100%",
      minHeight: "50vh",
      height: "max-content",
    },
    root: {
      flexGrow: 1,
      paddingTop: "5vh",
      paddingBottom: "5vh",
      marginTop: theme.spacing.xl,
    },
    footerText: {
      fontWeight: 500,
      whiteSpace: "nowrap",
    },
    bigScreen: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    smallScreen: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
  }));

  const { classes } = useStyles();
  const renderContent = (delay) => (
    <motion.div
        initial={{ x: "90%" }}
      animate={{ x: "-80%" }}
      transition={{
        duration: 10,
        delay,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{ display: "flex", marginRight: "4vw" }}
    >
      <Link href="/about" passHref>
        <Text color="#d2d2d2" sx={{ whiteSpace: "nowrap" }} component="a" weight={600} size={"3rem"}>
          Domluvme se
        </Text>
      </Link>
      <Button
        sx={{
          height: "100%",
          fontSize: "5rem",
          color: "#d2d2d2",
          backgroundColor: "#d2d2d2",
          ":hover": {
            backgroundColor: "#bababa",
          },
        }}
      >
        <MdOutlineKeyboardArrowRight />
      </Button>
    </motion.div>
  );

  return (
    <div className={classes.main}>
      <Container size="90%" className={classes.root}>
      <Paper
        sx={{
          backgroundColor: "#393939",
          margin: "0 0vw",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          padding: "0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        
          {Array.from({ length: 5 }).map((_, index) => {
            return renderContent(index * 1.5);
          })}
        </Paper>
        <Space h="xl" />
        <div style={{ display: "flex" }}>
          <div className={`${classes.bigScreen}`} style={{ width: "30%", borderRadius: "6px" }}>
            <MeSyntax />
          </div>
          <Grid className={`${classes.bigScreen}`} sx={{ width: "70%", margin: "0 auto 0 auto", padding: "0 5vw" }}>
          <Grid.Col span={12}>
            <Text  size={"5rem"} sx={{marginBottom: "-5vh"}} className={classes.footerText} color={"#d2d2d2"}>
              608 270 754
             
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"6vw"} className={classes.footerText}  variant="gradient"  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              
              Ondřej Zaplatílek
            
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Link href="mailto:ondrej@ondrejzaplatilek.eu?subject=Chci si nechat vytvořit web">
            <Text align="right"  sx={{marginTop: "-3vh"}} size={"3rem"} className={classes.footerText} color={theme.colors.cyan[9]}>
           
           ondrej@ondrejzaplatilek.eu
         </Text>
            </Link>
          </Grid.Col>
          </Grid>
          <Grid className={`${classes.smallScreen}`} sx={{ width: "100%", margin: "0 auto", padding: "0 0vw" }}>
          <Grid.Col span={12}>
            <Text align="center"  size={"12vw"} sx={{}} className={classes.footerText} color={"#d2d2d2"}>
              608 270 754
             
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text align="center" size={"10vw"} className={classes.footerText}  variant="gradient"  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              
              Ondřej Zaplatílek
            
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Link href="mailto:ondrej@ondrejzaplatilek.eu?subject=Chci si nechat vytvořit web">
            <Text align="center"  sx={{}} size={"6vw"} className={classes.footerText} color={theme.colors.cyan[9]}>
           
           ondrej@ondrejzaplatilek.eu
         </Text>
            </Link>
          </Grid.Col>
          <Grid.Col span={12}>
          <MeSyntax />
          </Grid.Col>
          </Grid>
          
        </div>
      </Container>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Text weight={500} color="#e9e9e9 " component="p">
          Ondřej Zaplatílek 2023
        </Text>
      </div>
    </div>
  );
}
