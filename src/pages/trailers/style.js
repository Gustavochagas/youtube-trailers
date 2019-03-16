import { createGlobalStyle } from 'styled-components';

import BackgroundLogin from './../../assets/img/background.png';

const TrailersStyles = createGlobalStyle`
  .trailers-wrapper {
    background: url(${BackgroundLogin});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 1;
    }

    .trailers__left {
      position: relative;
      width: 30%;
      padding-right: 50px;
      z-index: 2;

      img {
        display: block;
        margin: 0 auto;
      }

      .trailers__btns {
        margin-top: 150px;

        .btn {
          display: block;
          width: 100%;
          max-width: 250px;
          padding: 10px 15px;
          margin: 10px auto;
          color: #fff;
          background: transparent;
          border 1px solid transparent;
          text-align: center;
          text-transform: uppercase;
          cursor: pointer;
          transition: all .2s ease-in-out;

          &:hover {
            border: 1px solid #a99e7e;
            color: #a99e7e;
          }
        }

        .btn--active {
          border: 1px solid #a99e7e;
          color: #a99e7e;
        }
      }
    }

    .trailers__right {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      z-index: 2;

      .video__item {
        width: calc(50% - 20px);
        height: 250px;
        margin 10px;
        overflow: hidden;
        position: relative;
        border: 2px solid #a99e7e;
        cursor: pointer;

        &:hover {
          img {
            transform: rotate(2deg) scale(1.1);
          }
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all .2s ease-in-out;
        }

        .video__item--title {
          width: 100%;
          background: rgba(0,0,0,0.7);
          color: #fff;
          z-index: 2;
          position: absolute;
          bottom: 0;
          text-align: center;
          padding: 20px 0;
        }
      }
    }
  }
`;

export default TrailersStyles;