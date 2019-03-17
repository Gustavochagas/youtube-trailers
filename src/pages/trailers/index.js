import React, { Component, Fragment } from 'react';
import axios from 'axios';

import TrailersStyles from './style';

import LogoWhite from './../../assets/img/logo_dark.png';

import Video from './../../components/video/index';

class Trailers extends Component {
    state = {
        trailers: [],
        limit: 6
    }

    async componentDidMount() {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&part=snippet,id&maxResults=30&key=AIzaSyC5inbK-lkQoRVcq6PAtssiB-CWFYwEQmo`);
        
        this.setState({trailers: response.data.items})
    }

    handleLogout = e => {
        localStorage.setItem('@Trailers:username', '');
        this.props.history.push('/');
    }

    handleLoadMore = e => {
        this.setState({
            limit: this.state.limit + 6
        })
    }

    render() {
    return (
        <Fragment>
            <TrailersStyles />
            <div className="trailers-wrapper">
                <div className="overlay"></div>
                <div className="trailers__left">
                    <img src={LogoWhite} alt="Logo" width="250"/>

                    <div className="trailers__btns">
                        <button className="btn btn--active">Trailers</button>
                        <button className="btn" onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="trailers__right">
                    {this.state.trailers.slice(0, this.state.limit).map(item => (
                        <Video key={item.id} video={item}/>
                    ))}
                    {this.state.limit <= 27 ? 
                    <button className="btn__moreItems" onClick={this.handleLoadMore}>Load More</button>
                    : null}      
                </div>
            </div>
        </Fragment>
    );
  }
}

export default Trailers;
