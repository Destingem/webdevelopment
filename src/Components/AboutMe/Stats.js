import { Text } from "@mantine/core";

export default function Stats() {
    return(
        <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "2vw"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            weight={700}
            size={"9vw"}
            sx={{ lineHeight: 1 }}
          >
            20
          </Text>
          <Text weight={400} size={"2vw"}>
            projektů
          </Text>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
        <div style={{display: "flex", alignItems: "flex-end", gap: "0.5vw"}}>
        <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            weight={700}
            size={"4vw"}
            sx={{ lineHeight: 1.55 }}
          >30 000</Text>
           <Text weight={600} size={"1.5vw"} sx={{lineHeight: 3}}>
            řádků kódu
          </Text>
        </div>
        <div style={{display: "flex", alignItems: "flex-end", gap: "0.5vw"}}>
        <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            weight={700}
            size={"4vw"}
            sx={{ lineHeight: 1.55 }}
          >60%</Text>
           <Text weight={600} size={"1.5vw"} sx={{lineHeight: 1}}>
            snížení nákladů na provoz
          </Text>
        </div>
        </div>
      </div>
    )
}