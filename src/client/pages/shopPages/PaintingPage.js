import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Loading from '../../hoc/loading/Loading';

const PaintingProducts = () => (
  <Query
    query={gql`
      {
        getProducts(category: "Painting") {
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

const PaintingPage = () => {
  return (
    <div className='paintingContainer'>
      <h1 className='paintingPageTitle'>Painting</h1>
      {/* <p className='paintingPageText'>If you would like to </p> */}

      <div className='productsContainer'>
        <PaintingProducts />
      </div>
    </div>
  );
};

export default PaintingPage;