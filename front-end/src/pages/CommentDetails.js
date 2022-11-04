import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";




const API_URL = "http://localhost:5005";


function CommentDetails (props) {
  const [comment, setComment] = useState(null);
  const { commentId } = useParams();
  
  
  const getComment = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/comments/${commentId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneComment = response.data;
        setComment(oneComment);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getComment();
  }, );

  
  return (
    <div className="CommentDetails">
      {comment && (
        <>
          <h1>{comment.text}</h1>
          <p>{comment.description}</p>
        </>
      )}

      

      

      <Link to="/posts">
        <button class="button-54">Back to comments</button>
      </Link>
          
      <Link to={`/posts/edit/${commentId}`}>
        <button class="button-54">Edit Comment</button>
      </Link>
      
    </div>
  );
}

export default CommentDetails;