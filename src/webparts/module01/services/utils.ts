export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const getMockedItems = (listName: string, itemsNumber: number) => {
  const array = new Array<string>();
  for (let index = 0; index < itemsNumber; index++) {
    array.push(`${listName} Item ${index}`);
  }
  return array;
};
