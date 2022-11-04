import { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "./../components/AddPost";
import PostCard from "./../components/PostCard";
import CommentCard from "../components/CommentCard";

const API_URL = "http://localhost:5005";


function PostList() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/posts`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  };

  const refreshPage = () => {
    getAllPosts();
  }


  

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPosts();
  }, [] );

  
  return (
    <div className="PostList">
    <h1>Recent Posts</h1>
      
     <br></br>
      
      { posts.map((post, _id) => <PostCard key={_id} {...post} />  )} 
    
      <AddPost refreshPage={refreshPage} /> 
      
    </div>
  );
}

export default PostList;

