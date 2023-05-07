import React, { useEffect, useState } from 'react';
import { createStyles, Text } from '@mantine/core';
import { useWindowScroll } from "@mantine/hooks";
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
    backgroundImage: "url(/images/gradient.webp)",
    width: '100%',
    margin: "5vh 0 0 0"
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
    textAlign: 'left',
  },
}));

const FirstScreen = ({ children }) => {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();
  const { y } = scroll;
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    setTranslateX(-y * 1.5);
  }, [y]);

  return (
    <div
      className={classes.gradientHeadingWrapper}
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <Text className={classes.textSizeDisplayLeft} component="div">
        {children}
      </Text>
    </div>
  );
};

export default FirstScreen;
