import { useState, useEffect } from "react";
import { getData } from "../asyncMock";

const [category, setCategory] = useState();

function ItemList() {
  useEffect(() => {
    async function fetchData() {
      const data = await getData;
      setCategory(JSON.parse(data));
    }
  fetchData();
  }, []);

  return (
    {}
  )
  
}

export default ItemList;