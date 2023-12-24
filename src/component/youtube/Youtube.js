import React ,{useState,useEffect} from 'react'
const Youtube = () => {
    const  [youTubeVideos,setyouTubeVideos]=useState([]);
    useEffect(()=>{
        fetch(
            "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyDkH418Pa8A7ijqH7SaqS3m3iocVgP2KYo"    )
                  .then((response) => response.json())
                  .then((data) => {
                    const youTubeVideos = data.items;
                    setyouTubeVideos(youTubeVideos);
                  });
    },[]);
  return (
    <div className="allVideosWrapper col-sm-12 ">
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-12">
          <div className="title-wraper bold video-title-wrapper">
            Latest Videos
          </div>
        </div>
        {youTubeVideos?.map((singleVideo, i) => {
          let vidId = singleVideo.id.videoId;
          let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          let videoWrapper = (
            <div key={i} className="col-sm-12 col-md-4">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank">
                    <img src={singleVideo.snippet.thumbnails.high.url} />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
          return videoWrapper;
        })}

      </div>
    </div>
  </div>
);
      };
export default Youtube

