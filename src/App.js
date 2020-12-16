import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  
  componentDidMount(){
    fetch("http://localhost:4000/toys")
    .then(r => r.json())
    .then(data => this.setState({toys: data}))
  }


  handleLikeButton = (toyObj)=>{
    let newToyArr = [...this.state.toys]
    let newToy = newToyArr.find(toy => toy.id === toyObj.id)
    newToy.likes += 1
    
    fetch(`http://localhost:4000/toys/${toyObj.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newToy),
      })
    .then(response => response.json())
    .then(data => {
      
      this.setState({toys: newToyArr})
    })

  }

  
  handleDonateButton = (toyObj)=>{
    let currentToys = [...this.state.toys]
    let toyIdx = currentToys.findIndex(toy => toy.id === toyObj.id)
    currentToys.splice(toyIdx,1)
    
    fetch(`http://localhost:4000/toys/${toyObj.id}`,
    {
      method: 'DELETE'
    })
    .then(this.setState({toys: currentToys}))
  }


  
  createToyHandler = (toyObj) =>{
    fetch(`http://localhost:4000/toys`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(toyObj),
      })
    .then(response => response.json())
    .then(data => {
        this.setState({toys: [...this.state.toys, data]})
      
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm createToy={this.createToyHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleLikeButton={this.handleLikeButton} handleDonateButton={this.handleDonateButton} />
      </>
    );
  }

}

export default App;
