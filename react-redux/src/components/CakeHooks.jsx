import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyCake } from "../Redux/Cake/CakeActions";

const CakeHooks = () => {
  //useselector will get the number of cakes from state
  // alternative to mapStateToProp
  const numberOfCakes = useSelector((state) => state.numberOfCakes);

  //usedispatch will map dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h4>With hooks</h4>
      <h2>num of cakes - {numberOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default CakeHooks;
