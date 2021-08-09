import React from 'react';
import ReactDOM from 'react-dom';
import './CoinPair.css';


class CoinPair extends React.Component{
  constructor(props){
  super(props);
  this.state = {
      coin: 'ETHBTC',
    };
  }

  render(){
    const SelectCoins = []
    for (var i=0; i < this.props.data.length; i++) {
      SelectCoins.push(<option value={this.props.data[i]["symbol"]}>{this.props.data[i]["symbol"]}</option>)
    }
    return(
        <div className="form-group col-4" id="CoinPair">
            <label>Select Coin:</label>
            <select class="form-control" name="coin" onChange={this.props.handleChange}>
            <option value="0" disabled selected>Select:</option>
            {SelectCoins}
          </select>
        </div>
      )
  }
}
export default CoinPair
