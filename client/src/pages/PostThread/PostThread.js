import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import "./postThread.css";

class postThread extends Component {
  state = {
    post: [],
    comment: ""
  };
  componentWillMount() {
    console.log(
      "This is our props",
      this.props.location.pathname.split("/").pop()
    );
    API.getForumPost(this.props.location.pathname.split("/").pop()).then(
      responseFromDB => {
        console.log("We got the individual forum post back", responseFromDB);
        this.setState({ post: responseFromDB.data });
      }
    );

    console.log("this is the postId:", this.props.postsId);
  }

  handleCommentInput = e => {
    console.log(e.target.value);
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = e => {
    const comment = {
      content: this.state.comment,
      vote: 0,
      userId: 2,
      postId: this.props.location.pathname.split("/").pop()
    };
    API.createCommentPost(comment).then(responseFromDB => {
      console.log("This is our response from the database", responseFromDB);
    });
  };

  render() {
    console.log("This is the state", this.state);
    return (
      <div>
        <div className="postDiv">
          <h1 className="headerDiv">{this.state.post.title}</h1>
          <p>{this.state.post.createdAt}</p>
          {/* <h1 className="postTitle">{this.state.post.title}</h1> */}
          <p>{this.state.post.content}</p>
          <p> by User #{this.state.post.userId}</p>

          <ul className="tagsDiv">
            <li>Tags: {this.state.post.tagId} </li>
            <li>Category: {this.state.post.categoryId}</li>
            {/* <p>Category: {post.categoryId}</p> */}
          </ul>
          <p>Votes: {this.state.post.vote}</p>
          <p>{this.state.post.URL}</p>
        </div>

        <div className="commentDiv">
          <h2 className="commentTitle">Post a comment!</h2>
          <input type="text" onChange={this.handleCommentInput} />
          <button onClick={this.handleCommentSubmit}>Add Comment!</button>
        </div>
      </div>
    );
  }
}

export default postThread;
