import { sleep, getMockedItems } from "./utils";
export const getList1Items = async () => {
  await sleep(1000);
  return Promise.resolve(getMockedItems("List 1", 10));
};

export const getList2Items = async () => {
  await sleep(2000);
  return Promise.resolve(getMockedItems("List 2", 20));
};
