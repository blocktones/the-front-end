import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import "./NavbarStyles.css"

// We are deconstructing props object directly in the parentheses of the function
function PostCard ( { title, description, _id,} ) {
  
  return (
    <div className="CommenCard card">
      <Link to={`/comments/${_id}`}>
        <button class="button-54">{title}</button>
      </Link>
      <h3 style={{  maxWidth: "5000px" }}>{description} </h3>
      <br></br>

  
    </div>
  );
}

export default CommentCard;