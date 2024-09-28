import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../asyncMock";
import { getCategory } from "../asyncMock";
import Item from "./Item";

const{id} = useParams();
const [category, setCategory] = useState();

function ItemList() {
  useEffect(() => {
    async function fetchData() {
      const response = await getData;
      const parsedResponse = JSON.parse(response);
      const data = getCategory(id, parsedResponse).content;
      setCategory(data);
    }
  fetchData();
  }, []);

  return (
    <ul>
      {category.map((product) => (
        <Item key={product.id} product={product} />
      ))}

    </ul>
  )
  
}

export default ItemList;