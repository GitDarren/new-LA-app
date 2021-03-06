import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";

class ForumFeed extends Component {
  state = {
    posts: []
  };
  componentWillMount() {
    API.getForumFeed().then(forumData => {
      console.log("We got the forum Data back", forumData);
      this.setState({ posts: forumData.data });
    });
  }

  render() {
    console.log("This is the state", this.state);
    return (
      <div>
        <h1>Forum Feed</h1>
        {this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <Link to={"/postthread/" + post.id}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.content}</p>
              <p>{post.URL}</p>
              <p>{post.userId}</p>
              <p>{post.tagId}</p>
              <p>{post.categoryId}</p>
              <p>{post.createdAt}</p>
              <p>{post.vote}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ForumFeed;
