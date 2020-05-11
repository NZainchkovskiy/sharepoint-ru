import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { getList2Items } from "../services/data-service";

interface IPage2Props {}

export const Page2: React.FC<IPage2Props> = (props) => {
  const [items, setItems] = React.useState<string[]>([]);
  React.useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getList2Items();
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
