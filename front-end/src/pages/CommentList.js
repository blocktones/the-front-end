import { useState, useEffect } from "react";
import axios from "axios";
import AddComment from "./../components/AddComment";
import PostCard from "./../components/PostCard";
import CommentCard from "../components/CommentCard";



const API_URL = "http://localhost:5005";


function CommentList() {
  const [comments, setComments] = useState([]);

  const getAllComments = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/comments`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  };

  const refreshPage = () => {
    getAllComments();
  }


  

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllComments();
  }, [] );

  
  return (
    <div className="PostList">
    <h1>Recent Posts</h1>
      
     <br></br>
      
      { comments.map((comment, _id) => <CommentCard key={_id} {...comment} />  )} 
 
    
      <AddComment refreshPage={refreshPage} /> 
  
    </div>
  );
}

export default CommentList;

