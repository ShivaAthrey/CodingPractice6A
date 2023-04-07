// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    console.log(count)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Numberr</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onIncrease}>
            Generate
          </button>
          <p className="para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
