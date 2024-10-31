import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { filterCollection, getCollection } from "../firebase/firebase";
import { FourSquare } from "react-loading-indicators";
import { useLoad } from "../hooks/useLoad";

function ItemListContainer() {
  const {id} = useParams();
  const [category, setCategory] = useState([]);
  const {isLoading, setDelay} = useLoad(true);

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

  useEffect(setDelay, []);

  console.log(category);

  return(
    <div className={isLoading ? "items-container-loader" : "items-container-category"}>

      {isLoading ?
        <FourSquare color="#E77917" style={{fontSize: "24px"}}/> 
      :
        <ItemList category={category} />
      }
      
    </div>
  )
}

export default ItemListContainer;