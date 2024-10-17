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
  }

  function handleIncrement() {
    if (counter < initialStock) {
      setCounter(counter + 1);
      stock.current--;
      console.log(stock.current);
    }
  }

  return {counter, handleDecrement, handleIncrement};
}