import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class forumfeed extends Component {
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
  }

  handleCommentInput = e => {
    console.log(e.target.value);
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = e => {
    const comment = {
      slug: "",
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
        <div>
          <h1>Thread Detail</h1>
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.content}</p>
          <p>{this.state.post.URL}</p>
          <p>{this.state.post.userId}</p>
          <p>{this.state.post.tagId}</p>
          <p>{this.state.post.categoryId}</p>
          <p>{this.state.post.createdAt}</p>
          <p>{this.state.post.vote}</p>
        </div>

        <input type="text" onChange={this.handleCommentInput} />
        <button onClick={this.handleCommentSubmit}>Add Comment!</button>
      </div>
    );
  }
}

export default forumfeed;
