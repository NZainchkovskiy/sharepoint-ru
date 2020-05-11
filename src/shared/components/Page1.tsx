import * as React from "react";
import { getListItems } from "../services/data-service";
import { IListItem } from "../model/IListItem";
import useSWR from "swr";

interface IPage1Props {}

export const Page1: React.FC<IPage1Props> = (props) => {
  const { data } = useSWR("List1", getListItems, { refreshInterval: 1000 });
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
