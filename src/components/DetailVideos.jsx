import videoUi from "../assets/video-ui.jpg";
import play from "../assets/play.png"

function DetailVideos({video}) {
  return (
    <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" className="img-container">
      <img src={videoUi} alt="Watch on Youtube" title="YouTube video player"  className="img-video"></img>
      <img src={play} alt="play button" className="img-play" />
    </a>
  )
}

export default DetailVideos;

