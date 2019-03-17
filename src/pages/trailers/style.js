import { createGlobalStyle } from 'styled-components';

import BackgroundLogin from './../../assets/img/background.jpg';

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
    flex-direction: row-reverse;
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
      position: fixed;
      left: 20px;
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
          user-drag: none; 
          user-select: none;  
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

    .btn__moreItems {
        display: block;
        width: 100%;
        max-width: 250px;
        padding: 10px 15px;
        margin: 10px auto;
        background: transparent;
        border: 1px solid #a99e7e;
        color: #a99e7e;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
         background: #a99e7e;
         color: #fff; 
        }
      }
    }
  }

  .ReactModal__Overlay--after-open {
    z-index: 3;
    background-color: rgba(0,0,0,0.75)!important;
  }
  .ReactModal__Content--after-open {
    background-color: #000!important;
    border: 2px solid #a99e7e!important;

    iframe {
      margin: 0 auto;
      display: block;
    }

    .close-modal {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fff;
      background: transparent;
      border: 0;
      font-size: 17px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        opacity: .7;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .trailers-wrapper {
      .trailers__left {
        width: 100%;
        position: relative;
        left: 0;

        .trailers__btns {
          margin-top: 0;
          text-align: center;

          .btn {
            display: inline-block;
            margin: 10px;
          }
        }
      }
      
      .trailers__right {
        width: 100%;
      }
    } 
  }

  @media only screen and (max-width: 768px) {
    .trailers-wrapper {
      .trailers__left {
        .trailers__btns {
          .btn {
            max-width: 150px;
          }
        }
      }
    }

    .ReactModal__Content--after-open {
      display: flex;
      align-items: center;
      justify-content: center;

      iframe {
        width: 500px;
        height: 300px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .trailers-wrapper {
      padding: 30px 15px;

      .trailers__right {
        .video__item {
          width: 100%;
        }
      }

      .trailers__left {
        padding-right: 0;

        .trailers__btns {
          .btn {
            max-width: 100px;
          }
        }
      }
    } 
  }
`;

export default TrailersStyles;