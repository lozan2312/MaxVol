import React from 'react';
import ReactDOM from 'react-dom';
import './TimeFrame.css';


class TimeFrame extends React.Component{
  constructor(props){
  super(props);
  this.state = {
      time: '1day',
    };
  }
  getTime = (event) => {
    let time;
    time = event.target.value;
    this.setState({ time });
    console.log(time);
  }
  render(){
    const SelectTime = []
    for (var i=0; i < this.props.data.length; i++) {
      SelectTime.push(<option value={this.props.data[i]["value"]}>{this.props.data[i]["value"]}</option>)
    }
    return(
        <div className="form-group col-4">
            <label>Select Time:</label>
            <select class="form-control" name="TimeFrame" onChange={this.getTime}>
            <option value="0" disabled selected>Select:</option>
            {SelectTime}
          </select>
        </div>
      )
  }
}
export default TimeFrame
