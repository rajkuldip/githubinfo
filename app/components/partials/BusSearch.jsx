import React, {Component} from 'react';
import $ from 'jquery';

export default class BusSearch extends Component {
    onSubmit(e) {
      e.preventDefault();
      let vehicleId = this.refs.vehicleId.value.trim();
      if (!vehicleId) {
        console.log('No Stop Id Added');
        return;
      }
      this.props.searchVehicleId(vehicleId);
      this.refs.vehicleId.value = '';
    }
    render() {
      return(
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon3">Search Bus Status:</span>
              <input className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Enter Bus Number" ref="vehicleId" />
            </div>
        </form>
      );
    }
}
