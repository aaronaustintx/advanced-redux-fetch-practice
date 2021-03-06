import React, { Component } from "react";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";
import {loadContacts} from "./actions/index";
import {loadVehicles} from "./actions/index";
import {loadProducts} from "./actions/index";
import {loadComments} from "./actions/index";
import {connect} from "react-redux";
import mapDispatchToProps from "./actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadContacts()
    this.props.loadVehicles()
    this.props.loadProducts()
    this.props.loadComments()
  }
  render() {
    return (
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Contacts</h1>
          <ContactsContainer />
          <h1>Products</h1>
          <ProductsContainer />
          <h1>Vehicles</h1>
          <VehiclesContainer />
          <h1>Comments </h1>
          <CommentsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    );
  }
}
export default (App);


