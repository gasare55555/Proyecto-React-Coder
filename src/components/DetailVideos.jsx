import videoUi from "../assets/video-ui.jpg";

function DetailVideos({video}) {
  return (
    <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" className="img-container">
      <img src={videoUi} alt="Watch on Youtube" title="YouTube video player"  className="img-video"></img>
    </a>
  )
}

export default DetailVideos;

