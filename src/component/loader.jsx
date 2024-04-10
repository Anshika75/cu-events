import React from 'react';

const Loader = () => {
    return (
        <>

            <style>
                {`
          .container {
            width: 112px;
            height: 112px;
          }
          .box1, .box2, .box3 {
            border: 16px solid #E2012D;
            box-sizing: border-box;
            position: absolute;
            display: block;
          }
          .box1 {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
            animation: anime1 4s infinite;
          }
          .box2 {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
            animation: anime2 4s infinite;
          }
          .box3 {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
            animation: anime3 4s infinite;
          }
          @keyframes anime1 {
            0% {
              width: 112px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }
            12.5%, 25%, 37.5%, 50%, 62.5%, 75%, 87.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }
            100% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }
          }
          @keyframes anime2 {
            0%, 12.5%, 25%, 37.5%, 87.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }
            50% {
              width: 112px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }
            62.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }
            75%, 100% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }
          }
          @keyframes anime3 {
            0%, 12.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }
            25% {
              width: 48px;
              height: 112px;
              margin-top: 0px;
              margin-left: 64px;
            }
            37.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }
            50%, 62.5%, 75%, 87.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }
            100% {
              width: 112px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }
          }
        `}
            </style>
            <div className="main w-full min-h-screen bg-black grid place-items-center">
                <div className="container">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                </div>
            </div>
        </>
    );
};

export default Loader;
