import { useState, useEffect } from "react";
import { getData, getCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

function ItemListContainer() {
  const {id} = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getData;
      const parsedResponse = JSON.parse(response);
      const data = getCategory(id, parsedResponse);
      data && setCategory(data);
    }
    fetchData();
  }, [id]);

  console.log(category);

  return(
    <div id="items-container">
      <ItemList category={category} />
    </div>
  )
}

export default ItemListContainer;