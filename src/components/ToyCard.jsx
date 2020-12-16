import React, { Component } from 'react';

class ToyCard extends Component {


localHandleLikeButton = e =>{
  this.props.handleLikeButton(this.props.toy)
}

localHandleDonateButton = e =>{
  this.props.handleDonateButton(this.props.toy)
}

  render() { 
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.localHandleLikeButton} >Like {'<3'}</button>
        <button className="del-btn" onClick={this.localHandleDonateButton}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
