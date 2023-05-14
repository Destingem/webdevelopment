import React, { useEffect, useState } from 'react';
import { createStyles, Text } from '@mantine/core';
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { useScroll} from 'react-use';

const useStyles = createStyles((theme) => ({
  gradientHeadingWrapper: {
    whiteSpace: 'normal',
    WebkitTextFillColor: 'transparent',
    objectFit: 'fill',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    display: 'block',
    position: 'static',
    overflow: 'visible',
    backgroundImage: "url(/image/gradient.webp)",
    width: '100%',
  
  },
  textSizeDisplayLeft: {
    objectFit: 'fill',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20vw',
    lineHeight: 0.95,
    display: 'block',
    position: 'static',
    overflow: 'hidden',
    fontWeight: 800,
    fontFamily: "degular-display,sans-serif",
  
  },
}));

const FirstScreen = ({ children }) => {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();
  const { y } = scroll;
  const [translateX, setTranslateX] = useState(0);
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;

  useEffect(() => {
    setTranslateX(mobile ? -y * 0.5 : -y * 1.5);
  }, [y]);

  return (
    <div
      className={classes.gradientHeadingWrapper}
      style={{ transform: `translateX(${translateX}px)`, marginTop: mobile ? "12vh" : "0vh" }}
    >
      <Text className={classes.textSizeDisplayLeft} component="div" sx={{  textAlign: mobile ? "center" : "left",}}>
        {children}
      </Text>
    </div>
  );
};

export default FirstScreen;
