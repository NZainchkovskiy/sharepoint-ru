import * as React from "react";
import { IListItem } from "../model/IListItem";
import {
  DetailsList,
  IColumn,
  buildColumns,
  Selection,
  SelectionMode,
} from "office-ui-fabric-react/lib/DetailsList";

interface IItemsListProps {
  items: IListItem[];
  onItemSelected?: (item: IListItem) => void;
  selectedItem?: IListItem;
}

export const ItemsList: React.FC<IItemsListProps> = (props) => {
  const { items } = props;
  const columns: IColumn[] = React.useMemo(
    () =>
      buildColumns(items).filter(
        (column) => column.name === "Title" || column.name === "ID"
      ),
    [items]
  );

  const selection = new Selection({
    onSelectionChanged: () => {
      if (props.onItemSelected) {
        const selectedItem = selection.getSelection()[0] as IListItem;
        props.onItemSelected(selectedItem);
      }
    },
  });
  const { selectedItem } = props;
  React.useEffect(
    () => selection.setItems(selectedItem ? [{ key: selectedItem.ID }] : []),
    [selectedItem]
  );

  return (
    <>
      <DetailsList
        setKey="expandedCardSet"
        items={items}
        columns={columns}
        selectionMode={SelectionMode.single}
        selection={selection}
      />
    </>
  );
};
