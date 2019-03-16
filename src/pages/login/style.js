import { createGlobalStyle } from 'styled-components';

import BackgroundLogin from './../../assets/img/background.png';

const LoginStyles = createGlobalStyle`
  .login-wrapper {
      background: url(${BackgroundLogin});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          z-index: 1;
      }

      .content__login {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 300px;

          img {
              margin: 0 auto;
              display: block;
          }

          .form__login {
              margin-top: 20px;
    
              .form__login--email, .form__login--password {
                  width: 100%;
                  background: transparent;
                  color: #fff;
                  border: 0;
                  border-bottom: 1px solid rgba(255,255,255,0.5);
                  padding: 8px 15px;
                  margin: 10px 0;
              }

              .form__login--btn {
                  display: table;
                  margin: 0 auto;
                  margin-top: 20px;
                  border: 1px solid rgba(255,255,255,0.5);
                  padding: 10px 30px;
                  background: transparent;
                  color: rgba(255,255,255,0.5);
                  text-transform: uppercase;
                  cursor: pointer;
                  transition: all .2s ease-in-out;

                  &:hover {
                      background: rgba(255,255,255,0.5);
                      color: #fff;
                  }
              }

              .form__login--error {
                  font-size: 14px;
                  color: #fff;
                  text-align: center;
              }
          }
      }
  }
`;

export default LoginStyles;