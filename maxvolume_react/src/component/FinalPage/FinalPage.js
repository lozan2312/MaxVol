import React from 'react';
import CoinPair from '../parts/Coin/CoinPair'
import TimeFrame from '../parts/TimeFrame/TimeFrame'
import './FinalPage.css';
import logo from './img.png';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

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

  handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    this.setState({ [key]: value });
 }

  handleSubmit = async e => {
    e.preventDefault();
    let data = {
      "time": this.state.time,
      "coin": this.state.coin
    }
    // sending form data on button submition clicked
    const response = await fetch('/FinalPage', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    let body = await response.text();
    body = JSON.parse(body);
    this.setState(body);
    console.log(body.volume.length);
    let volume=[]
    for (let i = 0; i < body.volume.length; i++) {
      volume.push(eval(body.volume[i]));
    }
    let avgPrice=[]
    for (let i = 0; i < body.avgPrice.length; i++) {
      avgPrice.push(eval(body.avgPrice[i]));
    }
    let ChartOptions={
      xAxis: {categories: avgPrice},
      chart: {type: 'column'},
      title: {text: 'Max Volume Indecator'},
      series: [{data:volume}]
    }
    this.setState({ChartOptions});
  }

  render(){
    if (this.state.data.length===0)
        return (<p>ops</p>);
    return(
      <div id="FinalPage">
        <center><img className="img-fluid" src={logo}/></center>
        <h1 className="text-center mt-5">Max Volume Indicator</h1>
        <div className="row m-5">
          <CoinPair data={this.state.data.Coins} handleChange={this.handleChange.bind(this)}/>
          <TimeFrame data={this.state.data.Time} handleChange={this.handleChange.bind(this)}/>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          <div class="chart">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={'chart'}
              options={this.state.ChartOptions}
            />
          </div>
        </div>
      </div>
      )
  }
}

export default FinalPage
