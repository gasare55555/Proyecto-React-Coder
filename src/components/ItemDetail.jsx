import "./ItemDetail.css"
import oneStar from "../assets/one-star.svg";
import twoStars from "../assets/two-stars.svg";
import threeStars from "../assets/three-stars.svg";
import fourStars from "../assets/four-stars.svg";
import fiveStars from "../assets/five-stars.svg";
import thumbsUp from "../assets/thumbs-up.svg";
import DetailVideos from "./DetailVideos";
import SelectAddContainer from "./SelectAddContainer";

function ItemDetail({item, genres, platforms, videos}) {
  function ratingStars(rating) {
    const score = Math.round((rating*5)/100);
    switch (score) {
      case 1:
        return oneStar;
      case 2:
        return twoStars;
      case 3:
        return threeStars;
      case 4:
        return fourStars;
      case 5:
        return fiveStars;
      default:
        return thumbsUp;
    }
  }

  console.log(videos);

  return (
    <article className="detail-container">
      <div className="card detail-card">
        <div className="detail-left">
          <img src={item.cover} className="card-img-top" alt={`${item.cover} cover image`} />

          <div className="card-body detail-body">
            <div className="detail-section">
              <h5 className="card-subtitle">Genres</h5>
              <p className="card-text detail-list">{genres.join(", ")}</p>
            </div>
            
            <div className="detail-section">
              <h5 className="card-subtitle">Platforms</h5>
              <p className="card-text detail-list">{platforms.join(", ")}</p>
            </div>

            <div className="detail-rating">
              <img src={ratingStars(item.rating)} alt={`${Math.round(item.rating)} estrellas`} />
            </div>
          </div>
        </div>

        <div className="detail-right">
          <h2 className="card-title mb-2">{item.name}</h2>
          <div className="card-body detail-body">
            <p className="card-text">{item.summary}</p>
            <h5 className="card-subtitle mb-3">Watch trailers</h5>

            <div className="detail-videos mb-3">
              <div className="rounded-container">
                {videos.map((video) => 
                <DetailVideos key={video} video={video} /> )}
              </div>    
            </div >
            
            <SelectAddContainer item={item}/>
            
          </div>
        </div>
      </div>
    </article>
  )    
}

export default ItemDetail;