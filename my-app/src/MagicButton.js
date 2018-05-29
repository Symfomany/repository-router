import React, { Component } from "react";
import { withRouter } from "react-router";

// fonction qui permet de trasnmettre toutes les fonctionnalités de React Router
// à un composant React

class MagicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.augmenter = this.augmenter.bind(this);
    console.log(this.props);
  }
  augmenter() {
    const nb = this.state.counter + 1;
    if (nb < 10) {
      this.setState({
        counter: nb
      });
    } else {
      this.props.history.push("/profil/tifus");
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.augmenter}>Augmenter</button>
      </div>
    );
  }
}

// Hight Order Composant
export default withRouter(MagicButton);
