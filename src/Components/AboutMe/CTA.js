import { createStyles, Text, Title, TextInput, Button, Image, rem, Paper, Card, Space, useMantineTheme } from '@mantine/core';
import image from "../../../public/images/websiteDevelopment.png";
import Link from 'next/link';
import {   MdOutlineKeyboardArrowRight } from "react-icons/md";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    maxHeight: "50vh",
    maxWidth: "80%",
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '30%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: "2vh",
    },
  },

  title: {
    color: theme.colors.cyan[6],
    fontSize: "2vw",
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export default function CTA() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Tak teď už mě znáte</Title>
        <Text fw={500} fz="lg" mb={5}>
          Pokud se mnou chcete vytvořit svůj web či aplikaci, mrkněte se na moje služby či mě rovnou kontaktujte.
        </Text>
       
<Space h="lg"/>
    <Link href="/services">
        <Card sx={{transition: "all 0.3s ease-in-out",backgroundColor: "rgb(233, 248, 250)", display: "flex", gap: "1vw", ":hover": {
            backgroundColor: theme.colors.cyan[3],
        }}}>
        <Card.Section sx={{maxWidth: "10%"}}>
            <Image src={image.src} fit='fill'/>
        </Card.Section>
          <div style={{display: "flex", flexDirection: "column"}}>
          <Text size={"1.75vw"} color='#22b8cf' weight={600}>Služby</Text>
            <Text> Co pro vás mohu vytvořit? Jak probíhá vývoj? Od definice požadavků až po deployment, to se dozvíte zde.</Text>
          </div>
          <Card.Section sx={{marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <MdOutlineKeyboardArrowRight style={{ fontSize: "5rem", marginTop: "-1vh",
          color: "#d2d2d2",}} />
          </Card.Section>
        </Card>
    </Link>
    <Space h="lg"/>
    <Link href="/kontakt">
        <Card sx={{transition: "all 0.3s ease-in-out",backgroundColor: theme.colors.teal[0], display: "flex", gap: "1vw", ":hover": {
            backgroundColor: theme.colors.teal[3],
        }}}>
        <Card.Section sx={{maxWidth: "10%"}}>
            <Image src={image.src} fit='fill'/>
        </Card.Section>
          <div style={{display: "flex", flexDirection: "column"}}>
          <Text size={"1.75vw"} color={theme.colors.teal[5]} weight={600}>Kontakt</Text>
            <Text>Pokud už víte co chtete, můžete mi rovnou napsat, či vyplnit formulář.</Text>
          </div>
          <Card.Section sx={{marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <MdOutlineKeyboardArrowRight style={{ fontSize: "5rem", marginTop: "-1vh",
          color: "#d2d2d2",}} />
          </Card.Section>
        </Card>
    </Link>
    
      </div>
      <Image src={image.src} className={classes.image} />
    </div>
  );
}