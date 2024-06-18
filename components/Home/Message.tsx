'use client'

import React from "react";
import Card from "./Card";
import { comments } from "../../utils/data";
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';


const Message = () => {

    const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <section className="bg-hero2 bg-center bg-no-repeat bg-cover w-full h-screen flex flex-col justify-center items-center">
      <Carousel
      withIndicators
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
        <div className="flex justify-center items-center">
          {comments.map((comment) => (
            <Carousel.Slide key={comment.id}>
              <Card
                name={comment.name}
                position={comment.position}
                image={comment.image}
                content={comment.content}
              />
            </Carousel.Slide>
          ))}
        </div>
      </Carousel>
      
    </section>
  );
};

export default Message;
