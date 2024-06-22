'use client'

import React from "react";
import Card from "./Card";
import { comments } from "../../utils/data";


const Message = () => {

  return (
    <section className="bg-hero2 bg-center bg-no-repeat bg-cover w-full h-fit sm:h-[80vh] flex flex-col justify-center items-center mt-4">
        <div className="flex justify-center flex-col sm:flex-row items-center gap-5 w-[80%] mx-auto">
          {comments.map((comment) => (
              <Card
                name={comment.name}
                position={comment.position}
                image={comment.image}
                content={comment.content}
              />
            ))}
        </div>
      
    </section>
  );
};

export default Message;
