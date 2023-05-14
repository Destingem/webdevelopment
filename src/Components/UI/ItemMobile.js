import Link from "next/link"
import { Paper, Text, useMantineTheme } from "@mantine/core"
export default function ItemMobile(props) {
    const theme = useMantineTheme();
    return(
        <Paper>
              <Link href={props.href}>
                <Text size={"10vw"} align="right" sx={{ fontWeight: 500, color: theme.colors.cyan[8]}}>
                  {props.label}
                </Text>
              </Link>
            </Paper>
    )
}