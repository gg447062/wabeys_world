import React from 'react';

export default class SamplePad extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio() {
    const id = this.props.id;
    const audioSource = document.getElementById(`pad-${id}`);
    audioSource.play();
  }

  render() {
    const { id } = this.props;
    return (
      <div className="pad" onClick={this.playAudio}>
        {`Pad ${id}`}
        <audio src="/assets/audio/laugh.m4a" id={`pad-${id}`} />
      </div>
    );
  }
}
