import React from "react";
import {
  Container,
  Grid,
  Col,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

export default function Footer() {
  const theme = useMantineTheme();
  const useStyles = createStyles((theme) => ({
    main:{
      //  background: theme.fn.linearGradient(45, theme.colors.cyan[0], theme.colors.blue[0]),
      borderTop: "4px solid #545454",
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
  }));

  const {classes }= useStyles();

  return (
    <div className={classes.main}>
      <Container size="lg" className={classes.root}>
        <Grid>
          <Grid.Col span={12}>
            <Text size={"5rem"} sx={{marginBottom: "-5vh"}} className={classes.footerText} color={theme.colors.dark[3]}>
              608 270 754
             
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"8rem"} className={classes.footerText}  variant="gradient"  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              
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
      </Container>
      </div>
  );
}
