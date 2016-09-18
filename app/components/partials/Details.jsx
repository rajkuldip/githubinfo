import React, {Component} from 'react';
import $ from 'jquery';

export default class Details extends Component {
    render() {
      return(
        <div className="detailsContainer">
          <div className="col-md-2">
            <a href={this.props.userData.html_url} className="imageLink">
              <img src={this.props.userData.avatar_url} target="_blank"/>
            </a>
          </div>
          <div className="col-md-10">
            <div className="row">
              <button className="btn btn-primary btn-xs">{this.props.userData.followers} Followers</button>&nbsp;&nbsp;
              <button className="btn btn-warning btn-xs">{this.props.userData.following} Following</button>
            </div>
          </div>
        </div>
      );
    }
}
