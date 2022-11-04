import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function AddComment(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // We need the post id when creating the new comment
    const { commentId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, commentId };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers   
    axios
      .post(
        `${API_URL}/api/comments`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }        
      )
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
        props.refreshPage();
      
        // Invoke the callback function coming through the props
        // from the PostDetailsPage, to refresh the post details
        props.refreshPost();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddComment">
      <h3>Add New Comment</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.title)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.description)}
        />

        <button class="button-54" type="submit">Add Comment</button>
      </form>

 
    </div>
  );
}

export default AddComment;