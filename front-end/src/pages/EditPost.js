import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function EditPost(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const navigate =  useNavigate();
  const { postId } = useParams();
  
  
  useEffect(() => {
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
        setName(onePost.name);
        setText(onePost.text);
      })
      .catch((error) => console.log(error));
    
  }, [postId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, text };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');  

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${API_URL}/api/posts/${postId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }              
      )
      .then((response) => {
        navigate(`/posts/${postId}`)
      });
  };
  
  
  const deletePost = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL}/api/posts/${postId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then(() => navigate("/posts"))
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditPost">
      <h1>Edit Post</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Text:</label>
        <textarea
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button class="button-54" type="submit">Update Post</button>
      </form>

      <button class="button-54" onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default EditPost;