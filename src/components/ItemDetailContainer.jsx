import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData, getItem, getValues } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
  const {id} = useParams();
  const [item, setItem] = useState({});
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getData;
      const parsedResponse = JSON.parse(response);
      const data = getItem(id, parsedResponse);
      if (data) {
        setItem(data);
        const genreValues = getValues(data, "genres", "name");
        genreValues && setGenres(genreValues);
        const platformValues = getValues(data, "platforms", "name");
        platformValues && setPlatforms(platformValues);
      }
    }
    fetchData();
  }, [id]);

  console.log(item);

  return (
    <div>
      <ItemDetail item={item} genres={genres} platforms={platforms} />
      <ItemCount />
    </div>
  )
}

export default ItemDetailContainer;