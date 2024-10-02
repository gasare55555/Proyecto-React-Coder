import { useState, useEffect } from "react";
import { getData, getCategory, getAllCategories } from "../asyncMock";
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
      if (id) {
        const data = getCategory(id, parsedResponse);
        data && setCategory(data);
      } else {
        const data = getAllCategories(parsedResponse);
        data && setCategory(data);
      }
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