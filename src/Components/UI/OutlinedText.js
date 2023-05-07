import React from 'react';
import { Text, createStyles, useMantineTheme } from '@mantine/core';

const OutlinedText = (props) => {
  const theme = useMantineTheme();

  const useStyles = createStyles((theme) => ({
    outlinedText: {
      color: 'transparent !important',
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: theme.colorScheme === 'dark' ? '#fff' : '#000',
      textShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)',
      fontWeight: 'bold',
    },
  }));

  const { classes } = useStyles();
  
  return (
    <Text className={classes.outlinedText} {...props}>
      {props.children}
    </Text>
  );
};

export default OutlinedText;
