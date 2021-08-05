import React from 'react';
import CoinPair from '../parts/Coin/CoinPair'
import TimeFrame from '../parts/TimeFrame/TimeFrame'

class FinalPage extends React.Component {
  constructor(props) {
    super(props)
    this.setState((props) => ({
      price: props.data.price
    }));

    this.state = {
      type: '',
      coin: 'ETHBTC',
      time: '1day',
    };

  }

  getPrice = (event) => {
    let region;
    let weight;
    if (event.target.name === 'optradio') {
      region = event.target.value;
      weight = this.state.weight;
      this.setState({ region });
    } else {
      region = this.state.region;
      weight = event.target.value;
      this.setState({ weight });
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          type: this.state.type,
          region,
          weight
        }
      )
    };
    fetch('/transaction/LocationPrice', requestOptions)
      .then(res => res.json())
      .then(json => { this.setState({ price: json[0].price }) })
      .catch(err => console.error("Error:", err));
  }

  onCardClick(type) {
    this.setState({ type });
  }

  render(){
    if (this.state.data.length===0)
        return (<p>ops</p>);
    return(
      <div>
        <CoinPair data={this.state.data.Coins}/>
        <TimeFrame data={this.state.data.Time}/>
      </div>
      )
  }
}

export default FinalPage
