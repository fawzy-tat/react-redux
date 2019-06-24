//Action
export const increment = number => {
  return {
    type: "INCREMENT",
    payload: number
  };
};
//Action
export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
