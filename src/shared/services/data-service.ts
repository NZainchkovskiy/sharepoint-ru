import { sp } from "@pnp/sp/presets/all";
import { IListItem } from "../model/IListItem";
export const getListItems = (listTitle: string) =>
  sp.web.lists.getByTitle(listTitle).items.get<IListItem[]>();

export const getListItemsByParent = (listTitle: string, parentId: number) =>
  sp.web.lists
    .getByTitle(listTitle)
    .items.filter(`ParentId eq ${parentId}`)
    .get<IListItem[]>();
