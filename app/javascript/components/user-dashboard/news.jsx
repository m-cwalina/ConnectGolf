import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const URL = `/api/v1/posts`;
  try {
    let response = await fetch(URL);
    let posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export default function News() {
  const posts = useLoaderData();

  const renderPosts = () => {
    return posts.map ((post) => {
      return (
        <div className='post-container'>
          <div className='post-picture-container'>
            <img className='post-picture' key={post.picture} src={post.picture || null} />
          </div>
          <div className='post-content-container'>
            <p>{post.content}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className='posts-container'>
      <div>{renderPosts()}</div>
    </div>
  );
}
