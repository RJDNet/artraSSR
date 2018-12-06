import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Loading from '../hoc/loading/Loading';

// import Zoom from 'react-reveal/Zoom';

const ShopPosts = () => (
  <Query
    query={gql`
      {
        getAllProducts {
          title
          text
          price
          image {
            secure_url
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <p>Error :(</p>;

      return data.getAllProducts.map(({ title, text, price, image }, i) => (
        <div className='shopProduct' key={i}>
          <h3 className='productTitle'>{title}</h3>
          {/* <Zoom duration={300} delay={0}> */}
          <img className='productImage' src={image.secure_url} />
          {/* </Zoom> */}
          <p className='productText'>{text}</p>
          <div className='addCartPriceContainer'>
            <button
              className='snipcart-add-item'
              data-item-id={title}
              data-item-name={title}
              data-item-price={price}
              data-item-image={image.secure_url}
              data-item-description={text}
              data-item-url='/'
            >
              Add to cart!
            </button>
            <p className='productPrice'>£{price}</p>
          </div>

          {/* <style jsx>
            {`
              .shopProduct {
                width: 45%;
                margin-top: 20px;
                margin-bottom: 20px;
                padding: 10px;
                border: 2px solid #dbdbdb;
                border-radius: 10px;
                box-shadow: 5px 5px 8px #dbdbdb;
              }

              .productTitle {
                text-align: center;
                font-family: Poppins, sans-serif;
              }

              .productText {
                display: block;
                min-height: 150px;
                font-family: Poppins, sans-serif;
                font-size: 14px;
              }

              .productPrice {
                float: left;
                padding-left: 20px;
                font-family: Poppins, sans-serif;
                font-weight: 700;
                font-size: 16px;
              }

              .productImage {
                display: block;
                height: 220px;
                width: 220px;
                margin: 20px auto;
              }

              .snipcart-add-item {
                float: right;
                padding: 15px;
                border: transparent;
                border-radius: 5px;
                background-color: #196d00;
                color: white;
                font-family: Poppins, sans-serif;
                transition: 0.15;
                cursor: pointer;
              }

              .snipcart-add-item:hover {
                background-color: #1e8400;
              }

              @media only screen and (max-width: 799px) {
                .shopProduct {
                  width: 100%;
                  padding: 10px;
                  box-sizing: border-box;
                }
              }
            `}
          </style> */}
        </div>
      ));
    }}
  </Query>
);

const ShopPage = () => {
  return (
    <div>
      <div className='shopContainer'>
        <h1 className='shopPageTitle'>SHOP</h1>
        <p className='shopPageText'>If you would like to </p>
      </div>

      <div className='productsContainer'>
        <ShopPosts />
      </div>

      {/* <style jsx>
        {`
          .shopContainer {
            max-width: 900px;
            margin: 0px auto;
          }

          .productsContainer {
            display: flex;
            justify-content: space-around;
            max-width: 800px;
            margin: 0px auto;
            flex-wrap: wrap;
          }

          .shopPageTitle {
            font-family: Poppins, sans-serif;
            text-align: center;
          }

          @media only screen and (max-width: 799px) {
            .productsContainer {
              flex-direction: column;
            }
          }
        `}
      </style> */}
    </div>
  )
}

export default ShopPage;
