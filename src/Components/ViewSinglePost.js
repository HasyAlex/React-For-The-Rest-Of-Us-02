import React, { useEffect, useState } from "react";
import Page from "./Page";
import axios, * as others from "axios";
import { useParams } from "react-router-dom";

function ViewSinglePost() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`/post/${id}`);
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("Network Error: 500");
      }
    }
    fetchPosts();
  }, []);

  if (isLoading)
    return (
      <Page title="...">
        <div>Loading...</div>
      </Page>
    );

  const date = new Date(post.createdDate);
  const dateFormatted = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Page title="Fake Title">
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="#" className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </a>
          <a className="delete-post-button text-danger" title="Delete">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <a href="#">
          <img className="avatar-tiny" src={post.author.avatar} />
        </a>
        Posted by <a href="#">{post.author.username}</a> on {dateFormatted}
      </p>

      <div className="body-content">
        <p>{post.body}</p>
      </div>
    </Page>
  );
}

export default ViewSinglePost;
