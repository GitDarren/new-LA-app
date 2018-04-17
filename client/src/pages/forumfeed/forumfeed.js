import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class forumfeed extends Component {
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
        {this.state.posts.map(singledude => {
          return (
            <div>
              <h1>{singledude.title}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default forumfeed;
