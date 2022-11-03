import axios from 'axios';

class PostsService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/posts
  createOne = (requestBody) => {
    return this.api.post('/api/posts', requestBody);
  }

  // GET /api/posts
  getAll = () => {
    return this.api.get('/api/posts');
  }

  // GET /api/posts/:id
  getOne = (id) => {
    return this.api.get(`/api/posts/${id}`);
  }

  // PUT /api/posts/:id
  updateOne = (id, requestBody) => {
    return this.api.put(`/api/posts/${id}`, requestBody);
  }

  // DELETE /api/posts/:id
  deletePost = (id) => {
    return this.api.delete(`/api/posts/${id}`);
  } 


}

// Create one instance (object) of the service
const postsService = new PostsService();

export default postsService;