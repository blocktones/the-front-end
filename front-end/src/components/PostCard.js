import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import "./NavbarStyles.css"

// We are deconstructing props object directly in the parentheses of the function
function PostCard ( { name, text, _id,} ) {
  
  return (
    <div className="PostCard card">
      <Link to={`/posts/${_id}`}>
        <button class="button-54">{name}</button>
      </Link>
      <h3 style={{  maxWidth: "5000px" }}>{text} </h3>
      <br></br>

  
    </div>
  );
}

export default PostCard;