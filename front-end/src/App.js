import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import EditPost from "./pages/EditPost";

import SignupPage from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import CommentList from "./pages/CommentList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/posts"
          element={ <IsPrivate> <PostList /></IsPrivate> } 
        />

        <Route
          path="/comments"
          element={ <IsPrivate> <CommentList /></IsPrivate> } 
        />


        <Route
          path="/posts/:postId"
          element={ <IsPrivate> <PostDetails /> <CommentList /> </IsPrivate> }
        />

<Route
          path="/comments/:commentId"
          element={ <IsPrivate> <PostDetails /> <CommentList /> </IsPrivate> }
        />

        <Route
          path="/posts/edit/:postId"
          element={ <IsPrivate> <EditPost /> <CommentList /></IsPrivate> } 
        />
         
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
