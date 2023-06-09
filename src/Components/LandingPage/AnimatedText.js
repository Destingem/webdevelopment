import React from "react";
import { motion } from "framer-motion";
import { Space, Text } from "@mantine/core";
const headerVariants = {
  initial: { opacity: 0, y: -50 },
  animate: (custom) => ({ opacity: 1, y: 0, transition: { delay: custom * 0.1 } }),
};

const cursorVariants = {
  blink: { opacity: [1, 0, 1], transition: { duration: 0.8, repeat: Infinity } },
};

const AnimatedHeader = ({ text, mobile }) => {
  const firstPartLength = text.split("").slice(0, -6).length;

  return (
    <div style={{ marginLeft: mobile ? "" : "1vh", position: "relative", zIndex: 150, display: "flex", flexDirection: "column", gap: "5vh" }}>
      <Text component="h1" weight={700} size={mobile ? "6vw" : "5vh"} w="95%" color="#212529">
        <motion.h1>
          {text.split("").slice(0, -6).map((char, index) => (
            <motion.span
              key={char + index}
              custom={index}
              variants={headerVariants}
              initial="initial"
              animate="animate"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </Text>
      <Text
      component="h1" 
        weight={700}
        size={mobile ? "4vh" : "8vh"}
        w="100%"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        mt={"-5vh"}
      >
        <motion.h1>
          {text.split("").slice(-6, -1).map((char, index) => (
            <motion.span
              key={char + index}
              custom={firstPartLength + index}
              variants={headerVariants}
              initial="initial"
              animate="animate"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </Text>
      <Space h={"2vh"} />
      <motion.span
        style={{
          marginTop: mobile ? "5vh" : "0vh",
          position: "absolute",
          bottom: "0",
          fontWeight: 700,
          fontSize: "20vh",
          color: "#212529",
        }}
        variants={cursorVariants}
        initial="initial"
        animate="blink"
      >
        _
      </motion.span>
    </div>
  );
};

export default AnimatedHeader;
