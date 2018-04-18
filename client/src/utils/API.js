import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  savePost: function(postData) {
    return axios.post("/api/savepost", postData);
  },
  getForumFeed: function(forumData) {
    return axios.get("/api/forumfeed", forumData);
  },
  getForumPost: function(id) {
    return axios.get("/api/forumfeed/" + id);
  },
  createCommentPost: function(comment) {
    return axios.post("/api/createcomment/", comment);
  }
};
