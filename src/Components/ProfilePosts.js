import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios, * as others from "axios";

export default function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/profile/${username}/posts`);
        console.log(response.data);
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Network Error! 500");
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="list-group">
      {posts.map((post) => {
        const date = new Date(post.createdDate);
        const dateFormatted = `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`;
        return (
          <Link
            key={post._id}
            href="#"
            className="list-group-item list-group-item-action"
            to={`/post/${post._id}`}
          >
            <img className="avatar-tiny" src={post.author.avatar} />{" "}
            <strong>{post.title}</strong>{" "}
            <span className="text-muted small">on {dateFormatted} </span>
          </Link>
        );
      })}
    </div>
  );
}
