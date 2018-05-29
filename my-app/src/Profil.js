import React, { Component } from "react";

import Message from "./Message";
import Photo from "./Photo";
import { Route, Link } from "react-router-dom";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    return (
      <h3>
        Le profil de:
        {this.props.match.params.username}
        <ul>
          <Link to={`/profil/${this.props.match.params.username}/messages`}>
            Messages de {this.props.match.params.username}
          </Link>
          <Link to={`/profil/${this.props.match.params.username}/photo`}>
            Photo de {this.props.match.params.username}
          </Link>
        </ul>
        <Route path="/profil/:username/messages" component={Message} />
        <Route path="/profil/:username" exact component={Message} />
        <Route path="/profil/:username/photo" component={Photo} />
      </h3>
    );
  }
}

export default Profil;
