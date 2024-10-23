import { useState, useRef } from "react";

export function useCount(initialCounter, initialStock) {
  const [counter, setCounter] = useState(initialCounter);
  const stock = useRef(initialStock);

  function handleDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
      stock.current++;
      console.log(stock.current);
    }
    return counter;
  }

  function handleIncrement() {
    if (counter < initialStock) {
      setCounter(counter + 1);
      stock.current--;
      console.log(stock.current);
    }
    return counter;
  }

  return {counter, setCounter, handleDecrement, handleIncrement};
}