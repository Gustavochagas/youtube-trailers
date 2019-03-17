import React, { Component, Fragment } from 'react';

import Modal from 'react-modal';

class Video extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
    };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        const { video } = this.props;
        const url_video = 'https://www.youtube.com/embed/'+ video.snippet.resourceId.videoId
    return (
        <Fragment>
            <div className="video__item" onClick={this.handleOpenModal}>
                <img src={video.snippet.thumbnails.maxres.url} alt={video.snippet.title}/>
                <p className="video__item--title">{video.snippet.title}</p>
            </div>

            <Modal 
                isOpen={this.state.showModal}
                contentLabel={video.snippet.title}
                ariaHideApp={false}
            >
            <iframe 
                title={video.snippet.title}
                width="784" 
                height="441" 
                src={url_video}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            />
            <button onClick={this.handleCloseModal} className="close-modal">Close</button>
            </Modal>
        </Fragment>
    );
    }
}

export default Video;
