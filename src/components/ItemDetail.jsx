import "./ItemDetail.css"

function ItemDetail({item, genres, platforms}) {
  return (
    <article className="detail-container">
      <div className="card detail-card">
        <img src={item.cover} className="card-img-top" alt={`${item.cover} cover image`} />
        <div className="card-body detail-body">
          <h2 className="card-title">{item.name}</h2>

          <div className="detail-section">
            <h5 className="card-subtitle">Genres</h5>
            <p className="card-text detail-text">{genres.join(", ")}</p>
          </div>
          
          <div className="detail-section">
            <h5 className="card-subtitle">Platforms</h5>
            <p className="card-text detail-text">{platforms.join(", ")}</p>
          </div>
        </div>
      </div>
    </article>
  )    
}

export default ItemDetail;