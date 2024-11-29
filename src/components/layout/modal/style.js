import styled from 'styled-components';

export const BoxStyle = styled.div`

      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border: 2px solid #000;
      box-shadow: 24;
      padding: 50px;

      h2 {
        text-align: center;
        width: 150px;
      }

      p {
        margin: 20px 10px;
      }

      img {
        width: 150px;
        position: absolute;
        right: -45px;
        top: -40px
      }

      fieldset {
        margin: 5px 0;
      }

      button {
        background-color: #725DA5;
        margin-top: 10px;
        padding: 10px 20px;
        color: #fff
      }


`
