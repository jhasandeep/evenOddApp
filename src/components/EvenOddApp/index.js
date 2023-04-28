// Write your code here

 let  random = Math.ceil(Math.random() * 100)

import {Component} from 'react'

import './index.css'

class EvenOdd extends Component {
  state = {count: 0, Even: 'even'}

 

  onIncrement = () => {
    this.setState((prevState) =>
      (  (prevState.count + random) % 2 === 0 
        ? {
            count: prevState.count + random,
            Even: 'even',
          }
        : {
            count: prevState.count + random,
            Even: 'odd',
          },
    ))
  }

  render() {
    const {count} = this.state
    const {Even} = this.state

    return (
      <div>
        <h1>Count {count}</h1>
        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>Count is {Even}</p>
      </div>
    )
  }
}

export default EvenOdd
