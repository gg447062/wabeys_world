import React from 'react';
import { Link } from 'react-router-dom';

const videoUrls = [
  '/assets/videos/Voices.mp4',
  '/assets/videos/Ass_Ass_Ass.mp4',
];

export default class VideoRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      video: 0,
    };

    this.playVideo = this.playVideo.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.nextVideo = this.nextVideo.bind(this);
  }

  playVideo() {
    const videoSource = document.getElementById('video-1');
    const { playing } = this.state;

    if (!playing) {
      videoSource.play();
      this.setState({
        playing: true,
      });
    } else {
      videoSource.pause();
      this.setState({
        playing: false,
      });
    }
  }

  nextVideo() {
    const index = (this.state.video + 1) % videoUrls.length;

    this.setState({
      video: index,
    });
  }

  mouseOver(event) {
    const mouseX = event.pageX;
    const videoSource = document.getElementById('video-1');

    const start = window.innerWidth / 2 - videoSource.width / 2;
    const step = videoSource.duration / 640;
    const time = (mouseX - start) * step;

    videoSource.currentTime = time;
  }

  render() {
    return (
      <div>
        <div className="back-button">
          <Link to="/main">back</Link>
        </div>
        <div id="video-container">
          <video
            width="640"
            height="480"
            src={videoUrls[this.state.video]}
            id="video-1"
            onMouseMove={this.mouseOver}
          />
          <div id="video-controls-div">
            <div onClick={this.playVideo} className="video-button">
              play
            </div>
            <div onClick={this.nextVideo} className="video-button">
              next
            </div>
          </div>
        </div>
      </div>
    );
  }
}
