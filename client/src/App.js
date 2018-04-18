import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import forumfeed from "./pages/forumfeed";
import Post from "./pages/Post";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Postthread from "./pages/Post-Thread/PostThread";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Post} />
        <Route exact path="/forumfeed" component={forumfeed} />
        <Route exact path="/postthread/:id" component={Postthread} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
