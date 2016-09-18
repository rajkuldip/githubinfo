import React, {Component} from 'react';
import Navbar from './partials/Navbar.jsx';
import UserSearch from './partials/UserSearch.jsx';
import Details from './partials/Details.jsx';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uId : 'rajkuldip',
      userData: []
    }
  }
  fetchData() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.uId,
      dataType:'jsonp',
      success : function(data){
        console.log(data)
        this.setState({userData:data.data});
      }.bind(this),
      error : function(error) {
        console.log(error)
      }.bind(this)
    })
  }
  searchUser(user) {
    this.setState({
      uId:user
    }, () => {
      this.fetchData();
    });

  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div id="content">
          <div className="row">
            <div className="col-md-12">
              <UserSearch searchUser = {this.searchUser.bind(this)} />
            </div>
          </div>
          <hr />
          <br />
          <div className="row">
            <div className="col-md-12">
              <Details userData = {this.state.userData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
