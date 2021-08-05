import React from 'react';
import CoinPair from '../parts/Coin/CoinPair'
import TimeFrame from '../parts/TimeFrame/TimeFrame'
import './FinalPage.css';
import logo from './img.png';


class FinalPage extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/FinalPage')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render(){
    if (this.state.data.length===0)
        return (<p>ops</p>);
    return(
      <div id="FinalPage">
        <center><img className="img-fluid" src={logo}/></center>
        <div className="row m-5">
          <CoinPair data={this.state.data.Coins}/>
          <TimeFrame data={this.state.data.Time}/>
        </div>
      </div>
      )
  }
}

export default FinalPage
