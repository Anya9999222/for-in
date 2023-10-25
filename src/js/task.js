export default function orderByProps(object, order) {
  const arr1 = [];
  const arr2 = [];
  Object.keys(object).forEach((item) => {
    if (order.includes(item)) {
      arr1.push({ key: item, value: object[item] });
    }
  });

  for (const prop in object) {
    if (!order.includes(prop)) {
      arr2.push({ key: prop, value: object[prop] });
    };
  };

  arr2.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    } if (a.key < b.key) {
      return -1;
    }
    return 0;
  });

  const merged = [...arr1, ...arr2];
  return merged;
};
