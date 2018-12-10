import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Loading from '../../hoc/loading/Loading';

const PhotographyProducts = () => (
  <Query
    query={gql`
      {
        getProducts(category: "Photograph") {
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

      return data.getProducts.map(({ title, text, price, image }, i) => (
        <div className='shopProduct' key={i}>
          <h3 className='productTitle'>{title}</h3>
          <img className='productImage' src={image.secure_url} />
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
        </div>
      ));
    }}
  </Query>
);

const PhotographPage = () => {
  return (
    <div className='photographyContainer'>
      <h1 className='photographyPageTitle'>Photography</h1>
      {/* <p className='photographyPageText'>If you would like to </p> */}

      <div className='productsContainer'>
        <PhotographyProducts />
      </div>
    </div>
  );
};

export default PhotographPage;