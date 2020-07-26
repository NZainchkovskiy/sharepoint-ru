import * as React from "react";
import { IModule04Props } from "./IModule04Props";
import { useState, useCallback } from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { useConstCallback } from "@uifabric/react-hooks";
import { Stack, IColor, getColorFromString } from "office-ui-fabric-react";
import { ItemsList } from "./ItemsList";
import { ColorPicker } from "office-ui-fabric-react/lib/ColorPicker";

const white = getColorFromString("#ffffff")!;

const Module04: React.FC<IModule04Props> = (props) => {
  const [colors, setColors] = useState(defaultColors);
  const [color, setColor] = useState(white);

  const handleAddColor = () => {
    const newColor = `#${color.hex}`;
    const colorsWithoutNew = colors.filter((item) => item !== newColor);
    const newColors = [...colorsWithoutNew, `#${color.hex}`];
    setColors(newColors);
  };

  const handleSort = (direction: 1 | -1) => {
    const newColors = [...colors].sort((i, j) =>
      i < j ? direction : -1 * direction
    );
    setColors(newColors);
  };

  const updateColor = useConstCallback((ev: any, colorObj: IColor) =>
    setColor(colorObj)
  );

  return (
    <>
      <Stack tokens={{ childrenGap: 10 }}>
        <Stack horizontal disableShrink>
          <ColorPicker
            color={color}
            onChange={updateColor}
            alphaSliderHidden={true}
          />
          <Stack.Item align="end">
            <DefaultButton text="Add" onClick={handleAddColor} />
            <DefaultButton text="Sort up" onClick={() => handleSort(1)} />
            <DefaultButton text="Sort down" onClick={() => handleSort(-1)} />
          </Stack.Item>
        </Stack>

        <ItemsList colors={colors} />
      </Stack>
    </>
  );
};

export default Module04;

const defaultColors = [
  "#ff0055",
  "#0099ff",
  "#22cc88",
  "blue",
  "green",
  "brown",
];
