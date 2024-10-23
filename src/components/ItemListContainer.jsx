import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { filterCollection, getCollection } from "../firebase/firebase";

function ItemListContainer() {
  const {id} = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const data = await filterCollection("items", "category", id);
        data && setCategory(data);
      } else {
        const data = await getCollection("items");
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