import React from 'react';
import format from 'date-fns/format'

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Loading from '../hoc/loading/Loading';
// import Slide from 'react-reveal/Slide';

const BlogPosts = () => (
  <Query
    query={gql`
      {
        getPosts {
          title
          text
          createdAt
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <p>Error :(</p>;

      return data.getPosts.map(({ title, text, createdAt }) => (
        // <Slide key={title} bottom duration={800} delay={0}>
        <div className='blogPost' key={title}>
          <h2 className='postTitle'>{title}</h2>
          <p className='postText'>{text}</p>
          <p className='postDate'>{format(createdAt, 'DD/MM/YYYY')}</p>


          {/* <style jsx>
              {`
            .blogPost {
              margin-top: 30px;
              margin-bottom: 30px;
              padding: 10px;
              box-sizing: border-box;
              border: 1px solid #dbdbdb;
              border-radius: 10px;
              box-shadow: 5px 5px 8px #dbdbdb;
            }

            .postTitle {
              font-family: Poppins, sans-serif;
            }

            .postText {
              font-family: Poppins, sans-serif;
            }

            .postDate {
              text-align: right;
              font-size: 12px;
            }
          `}
            </style> */}
        </div>
        // </Slide>
      ));
    }}
  </Query>
);

const BlogPage = () => {
  return (
    <div className='blogContainer'>
      <h1 className='blogPageTitle'>BLOG</h1>

      <div className='postsContainer'>
        <BlogPosts />
      </div>
      {/* <style jsx>
        {`
        .blogPageTitle {
          font-family: Poppins, sans-serif;
          text-align: center;
        }

        .postsContainer {
          min-height: 1000px;
          max-width: 900px;
          margin: 0px auto;
        }
      `}
      </style> */}
    </div>
  );
};

export default BlogPage;