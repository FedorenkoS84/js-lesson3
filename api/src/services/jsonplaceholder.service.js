const createAxiosClient = require("../client/axiosClient");

const api = createAxiosClient("https://jsonplaceholder.typicode.com");

const getPosts = () => api.get("/posts");
const getPostById = (id) => api.get(`/posts/${id}`);
const getUsers = () => api.get("/users");
const createPost = (data) => api.post("/posts", data);
const createComment = (data) => api.post("/comments", data);

module.exports = {
  getPosts,
  getPostById,
  getUsers,
  createPost,
  createComment,
};
