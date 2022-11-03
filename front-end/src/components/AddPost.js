import { useState } from "react";
import axios from "axios";
import "./style.css"

const API_URL = "http://localhost:5005";

function AddPost(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, text };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/api/posts`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        // console.log(response.data)
        setName("");
        setText("");
         props.refreshPage();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div  className="AddPost">
    <br></br>
       <hr></hr>
       <br></br>
      <h2>Add Post</h2>
      
      <form class="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      
        <textarea class="textarea"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button class="button-54" type="submit">Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default AddPost;