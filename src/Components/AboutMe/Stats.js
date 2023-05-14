import { Text } from "@mantine/core";

export default function Stats({mobile}) {
    return(
        <div
        style={{
          width: mobile ? "100%" : "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: mobile ? "center" :"flex-end",
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
          component="p" 
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            weight={700}
            size={mobile ? "30vw" : "9vw"}
            sx={{ lineHeight: 1 }}
          >
            20
          </Text>
          <Text component="p"  weight={400} size={mobile ? "8vw" : "2vw"}>
            projektů
          </Text>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
        <div style={{display: "flex", alignItems: "flex-end", gap: "0.5vw", flexDirection: mobile ? "column" : "row"}}>
        <Text
        component="p" 
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            weight={700}
            size={mobile ? "12vw" : "4vw"}
            sx={{ lineHeight: 1.55 }}
          >30 000</Text>
           <Text component="p"  weight={600} align="right" sx={{lineHeight: 3}} size={mobile ? "4vw" :"1.5vw"}  >
            řádků kódu
          </Text>
        </div>
        <div style={{display: "flex", alignItems: "flex-end", gap: "0.5vw", flexDirection: mobile ? "column" : "row"}}>
        <Text
        component="p" 
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            weight={700}
            size={mobile ? "12vw" : "4vw"}
            sx={{ lineHeight: 1.55 }}
          >60%</Text>
           <Text component="p"  weight={600} align="right" size={mobile ? "4vw" :"1.5vw"} sx={{lineHeight: 1}}>
            snížení nákladů na provoz
          </Text>
        </div>
        </div>
      </div>
    )
}