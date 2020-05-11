import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { getList1Items } from "../services/data-service";

interface IPage1Props {}

export const Page1: React.FC<IPage1Props> = (props) => {
  const [items, setItems] = React.useState<string[]>([]);
  React.useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getList1Items();
      setItems(fetchedItems);
    };
    fetchItems();
  }, []);
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
