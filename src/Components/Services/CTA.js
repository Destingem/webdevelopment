import { createStyles, Text, Title, TextInput, Button, Image, rem } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
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
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
    backgroundColor: theme.colors.cyan[6] + "!important",
  },
}));

export default function CTA() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Od vašich stránek už vás dělí jen jeden krok</Title>
        <Text fw={500} fz="lg" mb={5}>
          Pokud zvažujete mé služby, stačí jen vložit váš email a já se vám ozvu.
        </Text>
        <Text fz="sm" c="dimmed">
          Během 48 hodin vám odpovím a domluvíme se na dalším postupu. Pokud si ještě nejste jisti, můžete se podívat na můj <Link href={"/o-me"}>
        &nbsp;
           <Text component='span' weight={600} color='blue'>Životopis</Text></Link> 
           &nbsp;
          či  &nbsp;<Link href={"/portfolio"}><Text component='span' weight={600} color='blue'>Portfolio</Text></Link>.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Váš email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Jdu do toho!</Button>
        </div>
      </div>
      <Image src={"/images/complete.svg"} className={classes.image} />
    </div>
  );
}