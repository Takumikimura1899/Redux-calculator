import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from "./types";

export const onNumberClick = (number) => ({
  type: INPUT_NUMBER,
  // number:numberを省略している
  number,
});

export const onPlusClick = () => ({
  type: PLUS,
});

export const onMinusClick = () => ({
  type: MINUS,
});

export const onMultiplyClick = () => ({
  type: MULTIPLY,
});

export const onDivideClick = () => ({
  type: DIVIDE,
});

export const onEqualClick = () => ({
  type: EQUAL,
});

export const onClearClick = () => ({
  type: CLEAR,
});
