import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import forumfeed from "./pages/forumfeed";
import Post from "./pages/Post";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import PostThread from "./pages/PostThread";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Post} />
        <Route exact path="/forumfeed" component={forumfeed} />
        <Route exact path="/PostThread/:id" component={PostThread} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
