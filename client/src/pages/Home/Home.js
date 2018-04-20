import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Home extends Component {
  state = {
    articles: [],
    q: "",
    title: "",
    description: "",
    topics: [],
    message: "Search For Articles To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("This is the value", value);
    console.log("This is the name", name);
    this.setState({
      [name]: value
    });
  };

  handleTopics = topics => {
    this.setState({
      topics: topics.split(",").trim()
    });
  };

  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
      .then(res =>
        this.setState({
          articles: res.data,
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.getArticles();
    console.log(
      "This is the state ------------------------------------------------",
      this.state
    );
    const newPost = {
      id: 6,
      title: this.state.title,
      slug: "this is the slug",
      content: "this is the content",
      vote: 4,
      userId: "1",
      categoryId: "1",
      tagId: "1"
    };
    API.savePost(newPost).then(responseFromBackend => {
      console.log(
        "This is our response from the back end",
        responseFromBackend
      );
    });
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong />
              </h1>
              <h2 className="text-center">
                Search for and save articles of interest.
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Panel title="Post to The Board" icon="">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
                title={this.state.title}
                tagId={this.state.tagId}
                content={this.state.content}
              />
            </Panel>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
