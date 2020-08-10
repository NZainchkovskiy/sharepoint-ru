import * as React from "react";
import { memo, useState } from "react";
import { Item } from "./Item";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

interface IItemsListProps {
  colors: string[];
}

const List = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 560px;
`;

const container = {
  enter: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: { opacity: 0 },
};

const ItemsListInner: React.FC<IItemsListProps> = (props) => {
  const [selected, setSelected] = useState(props.colors[0]);

  return (
    <AnimateSharedLayout>
      <List variants={container} initial="exit" animate="enter">
        {props.colors.map((color) => (
          <Item
            key={color}
            color={color}
            isSelected={selected === color}
            onClick={() => setSelected(color)}
          />
        ))}
      </List>
    </AnimateSharedLayout>
  );
};

export const ItemsList = memo(ItemsListInner);
