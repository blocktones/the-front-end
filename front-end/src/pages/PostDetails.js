import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/AddComment";

import CommentCard from "../components/CommentCard";

const API_URL = "http://localhost:5005";


function PostDetails (props) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  
  
  const getPost = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/posts/${postId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const onePost = response.data;
        setPost(onePost);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getPost();
  }, );

  
  return (
    <div className="PostDetails">
      {post && (
        <>
          <h1>{post.name}</h1>
          <p>{post.text}</p>
        </>
      )}

      
      <AddComment refreshPost={getPost} postId={postId} />           

       { post && post.comments.map((comment) => <CommentCard key={comment._id} {...comment} /> )}  

      <Link to="/posts">
        <button class="button-54">Back to posts</button>
      </Link>
          
      <Link to={`/posts/edit/${postId}`}>
        <button class="button-54">Edit Post</button>
      </Link>
      
    </div>
  );
}

export default PostDetails;