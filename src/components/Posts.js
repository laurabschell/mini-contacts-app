import React from "react";

function Posts(props) {
  const posts = props.posts;
  const loading = props.loading;

  if (loading) {
    return <h3>Loading... Please wait.</h3>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
