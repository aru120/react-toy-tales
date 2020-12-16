import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

  
  renderToys = ()=>{
   return this.props.toys.map(toyObj => <ToyCard key={toyObj.id} toy={toyObj} handleLikeButton={this.props.handleLikeButton} handleDonateButton={this.props.handleDonateButton}/> )
  }


  

  render(){
    return(
      <div id="toy-collection">
        {this.renderToys()}
      </div>
    );
  }
}

export default ToyContainer;
