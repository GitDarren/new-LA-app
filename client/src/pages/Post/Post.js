import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class Post extends Component {
  state = {
    title: "",
    content: "",
    tagId: "",
    categoryId: "Baseball",
    URL: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("This is the value", value);
    console.log("This is the name", name);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.getArticles();
    console.log(
      "This is the state ------------------------------------------------",
      this.state
    );
    const newPost = {
      // id: 12,
      title: this.state.title,
      slug: "this is the slug",
      content: this.state.content,
      userId: this.state.userId,
      categoryId: this.state.categoryId,
      tagId: this.state.tagId,
      URL: this.state.URL
    };
    API.savePost(newPost).then(responseFromBackend => {
      console.log(
        "This is our response from the back end",
        responseFromBackend
      );
    });
  };

  render() {
    console.log("This is the state", this.state);
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Post to The Board</strong>
              </h1>
              <h2 className="text-center">
                Engage with the community by creating a post. Ask questions,
                give advice, write about what you know. Basically contribute!
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Panel title="" icon="">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                title={this.state.title}
                URL={this.state.URL}
                categoryId={this.state.categoryId}
                content={this.state.content}
                tagId={this.state.tagId}
              />
            </Panel>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Post;
