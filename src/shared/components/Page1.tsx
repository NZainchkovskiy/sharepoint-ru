import * as React from "react";
import { getListItems } from "../services/data-service";
import useSWR from "swr";
import { ItemsList } from "./ItemsList";
import { IListItem } from "../model/IListItem";
import { Text } from "office-ui-fabric-react/lib/Text";

interface IPage1Props {}

export const Page1: React.FC<IPage1Props> = (props) => {
  const [selectedItem, setSelectedItem] = React.useState<IListItem>(null);
  const { data: list1Data } = useSWR("List1", getListItems, {
    refreshInterval: 1000,
  });
  const { data: list2Data } = useSWR("List2", getListItems, {
    refreshInterval: 1000,
  });
  const list1Items = list1Data || [];

  const list2Items = list2Data || [];
  const list2FilteredItems = selectedItem
    ? list2Items.filter((item) => item.ParentId === selectedItem.ID)
    : list2Items;

  return (
    <>
      {selectedItem && (
        <div>
          <Text variant="small">Selected Item: {selectedItem.Title}</Text>
        </div>
      )}
      <Text variant="large">List1</Text>
      <ItemsList items={list1Items} onItemSelected={setSelectedItem} />

      <Text variant="large">List2 (filtered)</Text>
      <ItemsList items={list2FilteredItems} />
    </>
  );
};
