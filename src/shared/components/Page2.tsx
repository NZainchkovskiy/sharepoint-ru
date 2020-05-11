import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { getListItems } from "../services/data-service";
import { IListItem } from "../model/IListItem";
import useSWR from "swr";

interface IPage2Props {}

export const Page2: React.FC<IPage2Props> = (props) => {
  const { data } = useSWR("List2", getListItems);
  const items = data || [];
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.ID}>{item.Title}</li>
        ))}
      </ul>
    </>
  );
};
