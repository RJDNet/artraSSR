import React from 'react';
import format from 'date-fns/format';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Loading from '../hoc/loading/Loading';

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
      if (error) return <p>No posts found.</p>;

      return data.getPosts.map(({ title, text, createdAt }) => (
        <div className='blogPost' key={title}>
          <h2 className='postTitle'>{title}</h2>
          <p className='postText'>{text}</p>
          <p className='postDate'>{format(createdAt, 'DD/MM/YYYY')}</p>
        </div>
      ));
    }}
  </Query>
);

const BlogPage = () => {
  return (
    <div className='blogPageContainer'>
      <h1 className='blogPageTitle'>BLOG</h1>

      <div className='postsContainer'>
        <BlogPosts />
      </div>
    </div>
  );
};

export default BlogPage;