import * as React from "react";
import { getListItems } from "../services/data-service";
import { IListItem } from "../model/IListItem";

interface IPage1Props {}

export const Page1: React.FC<IPage1Props> = (props) => {
  const [items, setItems] = React.useState<IListItem[]>([]);
  React.useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getListItems("List1");
      setItems(fetchedItems);
    };
    fetchItems();
  }, []);
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
