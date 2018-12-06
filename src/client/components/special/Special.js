import React from 'react';

const Special = () => {
  return (
    <div className='specialContainer'>

      <div className='special'>
        <p className='specialText'>Here is an advert about something or other!</p>
      </div>

      {/* <style jsx>
        {`
          .specialContainer {
            position: relative;
            display: flex;
            height: 100px;
            width: 100%;
            background-color: #db374a;
            margin-top: 1px;
            justify-content: center;
            text-align: center;
          }

          .special {
            position: relative;
            display: flex;
            height: 100px;
            width: 200px;
          }

          .specialText {
            font-family: Poppins, sans-serif;
            font-weight: 400;
            color: white;
            font-size: 15px;
            padding-top: 12px;
          }

          @media only screen and (max-width: 799px) {
            .specialContainer {
              margin-top: 0px;
            }
          }
        `}
      </style> */}
    </div>
  );
};

export default Special;
