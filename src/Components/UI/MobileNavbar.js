import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  Burger,
  Divider,
  Drawer,
  Grid,
  MediaQuery,
  Menu,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import ItemMobile from "./ItemMobile";
import Logo from "../../../public/images/logo.png";
import { useRouter } from "next/router";


export default function NavBarMobile(props) {
  const menuItems = [{href: "/", label: "Hlavní stránka"},{href: "/o-me", label: "O mě"}, {href: "/sluzby", label: "Služby"}, {href: "/portfolio", label: "Portfolio"}, {href: "/blog", label: "Blog"}, {href: "/kontakt", label: "Kontakt"}];
  const itemsSortiment = [{href: "/sortiment", label: "Přehled sortimentu"}, {href: "/drcenypolystyren-bily", label: "Polystyren sypaný - EPS bílý"},{href: "/eps-jemny", label: "Polystyren sypaný - EPS jemný"} ,{href: "/drcenypolystyren-sedy", label: "Polystyren sypaný - EPS šedý"}, {href: "/drcenypolystyren-XPS", label: "Polystyren sypaný - XPS"}, {href: "/ceny", label: "Ceník"} , {href: "/foukana-izolace", label: "Foukaná izolace"}];
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  var [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();
  const router = useRouter();
useEffect(()=> {
    setOpened(false)
}, [router.pathname])
  return (
    <div
      className={styles.main_mobile}
      style={{
        backgroundColor: scroll.y > 0 && "rgb(34, 184, 207, 0.5)",
        position: "fixed",
        zIndex: "12000",
        transition: !opened ? (scroll.y > 0 ? "2s" : "0.5s") : 0,
        backdropFilter: scroll.y > 0 && !opened && "blur(4px)",
      }}
    >
      {!opened && (
      
         
          <Link href={"/"} className={styles.header_mobile}>
                <Image src={Logo} width={50} height={50} style={{}} />
                <div>
                <Text size="xl" weight={600}>
                  ndřej
                </Text>
                <Text size="xl" weight={600}>
                  aplatílek
                </Text>
                </div>
              </Link>
            
        
      )}
      {!opened && <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        
      />}
      {opened && (
        <Drawer
          zIndex={12001}
          onAbort={() => setOpened((o) => !o)}
          opened={opened}
          onClose={() => setOpened((o) => !o)}
         
          title={
          
            <Link href={"/"} className={styles.header_mobile}>
                <Image src={Logo} width={50} height={50} style={{}} />
                <div>
                <Text size="xl" weight={600}>
                  ndřej
                </Text>
                <Text size="xl" weight={600}>
                  aplatílek
                </Text>
                </div>
              </Link>
          }
          padding="xl"
          size="full"
          transition="fade"
          position="right"
          color="blue"
          sx={{backgroundColor: theme.colors.cyan[7] + "!important"}}
        >
          <div className={styles.openedMenu_mobile} >
      {menuItems.map((item) => {
        return(
            <ItemMobile {...item} />
        )
        })}
          </div>
        </Drawer>
      )}
    </div>
  );
}
