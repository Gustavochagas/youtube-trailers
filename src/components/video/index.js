import React, { Component, Fragment } from 'react';

class Video extends Component {
  render() {
      const { video } = this.props;
    return (
        <Fragment>
            <div className="video__item">
                <img src={video.snippet.thumbnails.maxres.url} alt={video.snippet.title}/>
                <p className="video__item--title">{video.snippet.title}</p>
            </div>
        </Fragment>
    );
  }
}

export default Video;
