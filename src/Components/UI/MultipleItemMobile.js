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
} from "@mantine/core";

export default function MultipleItemMobile(props) {
  return (
    <Accordion iconPosition="right">
      <AccordionItem
        label={
          <Text size="xl" sx={{ fontWeight: 500, color: "#545454"}}>
            {props.label}
          </Text>
        }
        sx={{
         
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignitems: "center",
          textAlign: "right",
          borderBottom: "none !important",
          gap: "5%",
        }}
      >
        {props &&
          props.items &&
          props.items.map((item, index) => {
            return (
              <Paper mb="sm">
                <Link href={item.href}>
                  <Text size="md" sx={{ fontWeight: 400, color: "#545454" }}>
                    {item.label}
                  </Text>
                </Link>
              </Paper>
            );
          })}
      </AccordionItem>
    </Accordion>
  );
}
