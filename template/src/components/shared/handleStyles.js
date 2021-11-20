export const handleCheckObj = object => {
  return Object.values(object)[0] !== undefined ? object : undefined;
};
