import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './style.css'
const Form = () => {

    const [post, setPost] = useState(null);    

    useEffect(() => {
        axios.get("http://localhost:5005/api/post")
        .then((res) => setPost(res.data))
    }, []);
    
    //if(posts === null) return <div>loading</div>
    
    return(
        <div>{post && post.map((post) => (
            <div key={post.postId}>{post.name}</div>))}
      <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn">Register</button>
          </div>
      </div>      </div>
    )       
}
export default Form;