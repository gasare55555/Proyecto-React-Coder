import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDocument, getValues } from "../firebase/firebase";

function ItemDetailContainer() {
  const {id} = useParams();
  const [item, setItem] = useState();
  const [genres, setGenres] = useState();
  const [platforms, setPlatforms] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await getDocument("items", id);
      if (data) {
        setItem(data);
        const genreValues = getValues(data, "genres", "name");
        genreValues && setGenres(genreValues);
        const platformValues = getValues(data, "platforms", "name");
        platformValues && setPlatforms(platformValues);
        const videoValues = getValues(data, "videos", "video_id");
        if (videoValues && videoValues.length > 3) {
          videoValues.splice(5);
          setVideos(videoValues);
        } else if (videoValues) {
          setVideos(videoValues);
        }
      } else {
        alert("Product not available");
      }
    }
    fetchData();
  }, [id]);

  console.log(item);

  return (
    <div>
      {item && <ItemDetail item={item} genres={genres} platforms={platforms} videos={videos} />} 
    </div>
  )
}

export default ItemDetailContainer;