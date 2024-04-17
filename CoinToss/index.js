import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  headsOrTails = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {image, heads, tails, total} = this.state
    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="descript">Heads (or) Tails</p>
          <img className="coin-image" src={image} alt="toss result" />
          <button className="button" type="button" onClick={this.headsOrTails}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="coin-count">Total: {total}</p>
            <p className="coin-count">Heads: {heads}</p>
            <p className="coin-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
