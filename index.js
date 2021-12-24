console.log("index");
//=======================================================================
//======================== ACTION CREATOR ===============================
//=======================================================================

const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

//=======================================================================
//======================== REDUCER  ===============================
//=======================================================================
const initialState = {
  numOfCake: 10,
};

const reducer = (state = initialState, action) => {
  if (action.type === "BUY_CAKE") {
    return { ...state, numOfCake: state.numOfCake + 1 };
  }
};
console.log(typeof reducer);

//=======================================================================
//======================== STORE  ===============================
//=======================================================================
const redux = require('redux');
const store = redux.createStore(reducer);
console.log(store);
console.log('intinal State', store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log(store.getState());
