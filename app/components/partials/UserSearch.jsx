import React, {Component} from 'react';
import $ from 'jquery';

export default class UserSearch extends Component {
    onSubmit(e) {
      e.preventDefault();
      let userId = this.refs.userId.value.trim();
      if (!userId) {
        console.log('No User Fouund');
        return;
      }
      this.props.searchUser(userId);
      this.refs.userId.value = '';
    }
    render() {
      return(
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon3">Search User:</span>
              <input className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Enter User Name" ref="userId" />
            </div>
        </form>
      );
    }
}
