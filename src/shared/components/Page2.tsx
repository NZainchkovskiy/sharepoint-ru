import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { getListItems } from "../services/data-service";
import { IListItem } from "../model/IListItem";

interface IPage2Props {}

export const Page2: React.FC<IPage2Props> = (props) => {
  const [items, setItems] = React.useState<IListItem[]>([]);
  React.useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getListItems("List2");
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
