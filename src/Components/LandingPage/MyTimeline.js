import { Card, Paper } from '@mantine/core';
import React, { useState, useEffect, useRef } from 'react';
import { Chrono } from 'react-chrono';

import  timelineItems  from './timelineItem';
import Image from 'next/image';
import { useScrollIntoView, useViewportSize } from '@mantine/hooks';
const MyTimeline = () => {
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;
  const [activeIndex, setActiveIndex] = useState(0);
  const chronoRef = useRef();
  const timelineRef = useRef();

/**
   const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 0 });
 */
  const cardStyle = {
    padding: "16px",
    borderRadius: "4px",
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    width: "100%",
    maxWidth: "25vw",
  };

  const CustomCard = ({ id, cardTitle, cardSubtitle, imageSrc }) => {
    return (
      <Card id={id} style={cardStyle} padding={mobile ? "xs" : "md"} shadow="xs" >
        
          <Card.Section style={{ marginRight: '20px', position: "relative", maxWidth: mobile ? "100%" : "40%", minHeight: "15vh" }}>
            <Image
              src={imageSrc}
              alt="Custom Card"
              
              style={{ padding: 0, objectFit: "cover" }} 
            />
          </Card.Section>
          <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{cardTitle}</h3> 
            <h4>{cardSubtitle}</h4>
          </div>
       
      </Card>
    );
  };
  
 const timelineItems2 = timelineItems.map(item => {
    return({title: item.title,
    timelineContent: <CustomCard
    id={item.id}
    cardStyle={cardStyle}
    cardTitle={item.cardTitle}
    cardSubtitle={item.cardSubtitle}
    imageSrc={item.img}
  />})
  })
  


  useEffect(() => {
    const handleScroll = (e) => {
      const newIndex = activeIndex + (e.deltaY > 0 ? 1 : -1);

      if (newIndex >= 0 && newIndex < timelineItems.length) {
        e.preventDefault(); // Prevent default scroll behavior when scrolling the timeline
        setActiveIndex(newIndex);
      }
    };

    const timelineElement = document.getElementById('my-timeline');
    if (timelineElement) {
      timelineElement.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (timelineElement) {
        timelineElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, [activeIndex, timelineItems]);



 

  return (
    <div
   
      id="my-timeline"
      style={{
        width: '100%',
    
        height: '80vh',
      }}
    >
      <Chrono
        items={timelineItems2}
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        activeItemIndex={activeIndex}
        onScrollEnd={(index) => {
          if (index >= 0 && index < timelineItems2.length) {
            setActiveIndex(index);
          }
        }}
        classNames={{
          card: 'my-card',
          cardMedia: 'my-card-media',
          cardSubTitle: 'my-card-subtitle',
          cardText: 'my-card-text',
          cardTitle: 'my-card-title',
          controls: 'my-controls',
          title: 'my-title',
        }}
        theme={{
    primary: '#22b8cf',
    secondary: '#fff',
    cardBgColor: '#22b8cf',
    titleColor: 'black',
    titleColorActive: '#22b8cf',
  }}
      />
    </div>
  );
};

export default MyTimeline;