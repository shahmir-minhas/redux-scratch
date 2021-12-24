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

// =========================================================================
// ==================   use single reducer for multiple action    =======================
// =========================================================================

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "buying Cake",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "buying icecream",
  };
}

const initailState ={
    numOfCake : 10,
    numOfIceCream: 20,
}

const reducer = (state = initailState, action)=>{
    if(action.type === 'BUY_CAKE'){

        return {...state, numOfCake : state.numOfCake + 1}
    }
    if(action.type === BUY_ICECREAM){

        return {...state, numOfIceCream : state.numOfIceCream + 1}
    }
}

const redux = require('redux');
const store = redux.createStore(reducer);

console.log('intinal State', store.getState());
const unsubscribe = store.subscribe(()=>{console.log('upadate State', store.getState())});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// =========================================================================
// ==================  multiple reducer for multiple action    =======================
// =========================================================================
// -------------    actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// -------------    actions creators
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "buying Cake",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "buying icecream",
  };
}

// -------------    initail states
const initailCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

// -------------    reducers
const cakeReducer = (state = initailCakeState, action) => {
  if (action.type === "BUY_CAKE") {
    return { ...state, numOfCake: state.numOfCake + 1 };
  } else {
    return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  if (action.type === BUY_ICECREAM) {
    return { ...state, numOfIceCream: state.numOfIceCream + 1 };
  } else {
    return state;
  }
};

// -------------    store
const redux = require("redux");
//  combine both reducer into one root reducer
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
//  pass both reducers as an object
// const rootReducer = combineReducer({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
// });
//  pass rootreducer in create store
const store = redux.createStore(rootReducer);

console.log("intinal State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("upadate State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// =========================================================================
// ==================  Redux Logger (MIDDLEWARE (THIRD PARTY)    ============
// =========================================================================

// -------------    actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// -------------    actions creators
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "buying Cake",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "buying icecream",
  };
}

// -------------    initail states
const initailCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

// -------------    reducers
const cakeReducer = (state = initailCakeState, action) => {
  if (action.type === "BUY_CAKE") {
    return { ...state, numOfCake: state.numOfCake + 1 };
  } else {
    return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  if (action.type === BUY_ICECREAM) {
    return { ...state, numOfIceCream: state.numOfIceCream + 1 };
  } else {
    return state;
  }
};

// -------------    store
const redux = require("redux");
// ====== LOGGER
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

//  combine both reducer into one root reducer
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//  pass rootreducer in create store
const store = redux.createStore(rootReducer, applyMiddleware(logger));

console.log("intinal State", store.getState());
const unsubscribe = store.subscribe(() => {
//   console.log("upadate State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
