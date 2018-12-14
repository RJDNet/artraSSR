import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Loading from '../../hoc/loading/Loading';

const DigitalProducts = () => (
  <Query
    query={gql`
      {
        getProducts(category: "Digital" ) {
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
      if (error) return <p>No products found.</p>;

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

const DigitalPage = () => {
  return (
    <div className='digitalContainer'>
      <h1 className='digitalPageTitle'>Digital</h1>
      {/* <p className='digitalPageText'>If you would like to </p> */}

      <div className='productsContainer'>
        <DigitalProducts />
      </div>
    </div>
  );
};

export default DigitalPage;
