import React, { Component } from "react";
import { buyCake } from "../Redux/Cake/CakeActions";
import { connect } from "react-redux";

const Cake = (props) => {
  return (
    <div>
      <h1>Buy a Cake - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy</button>
    </div>
  );
};

//step 1
// Selectors used to select single property of a state
// map state form store to prop
//i.e what ever props component recieve it will add additional props of state
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

//step 2
// To use dispatch
// map dispatch to the props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      return dispatch(buyCake());
    },
  };
};

//step 3
//connect these 2 fun with component Cake

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
