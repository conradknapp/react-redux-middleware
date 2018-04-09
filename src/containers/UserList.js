import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onFetchUsers, onDeleteUser } from "../actions/index";

import Card from "../components/Card";

class UserList extends Component {
  componentWillMount() {
    this.props.onFetchUsers();
  }

  render() {
    return (
      <main>
        <h1>Users</h1>
        {this.props.users.map(card => (
          <Card
            clicked={() => this.props.onDeleteUser(card.id)}
            key={card.id}
            name={card.name}
            city={card.address.city}
            email={card.email}
          />
        ))}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onFetchUsers,
      onDeleteUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
