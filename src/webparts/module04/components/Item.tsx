import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IItemProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const ListItem = styled(motion.li)`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
`;

const Outline = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 10px solid white;
  border-radius: 50%;
`;

const item = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

export const Item: React.FC<IItemProps> = (props) => {
  return (
    <ListItem
      layout
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      variants={item}
    >
      {props.isSelected && (
        <Outline
          layoutId="outline"
          initial={false}
          animate={{ borderColor: props.color }}
          transition={spring}
        />
      )}
    </ListItem>
  );
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
