import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion, useInView } from "framer-motion";

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
  font-size: 3rem;
  font-weight: 800;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
  font-size: 3rem;
  font-weight: 800;
`;

export default function AnimatedTitle() {
  const text = "Cameron Petrie"; // This would normally be passed into this component as a prop!

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h2 aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <Word
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordAnimation}
            transition={{
              delayChildren: 4 + index * 0.75,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </h2>
  );
}
