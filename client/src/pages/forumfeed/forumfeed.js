import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import "./forumfeed.css";

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
      <div className="forumDiv">
        <div className="headerDiv">
          <h1>Forum Feed</h1>
        </div>
        {this.state.posts.map(post => {
          return (
            <div className="postDiv" key={post.id}>
              <Link to={"/postthread/" + post.id}>
                <h1 className="postTitle">
                  {post.title} <span className="urlSpan">{post.URL}</span>
                </h1>
              </Link>
              {/* <p>{post.content}</p> */}

              <p>
                by User #{post.userId} <span>On {post.createdAt}</span>
              </p>
              <ul className="tagsDiv">
                <li>Tags: {post.tagId} </li>
                <li>Category: {post.categoryId}</li>
                {/* <p>Category: {post.categoryId}</p> */}
              </ul>
              <p>Votes: {post.vote}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ForumFeed;
