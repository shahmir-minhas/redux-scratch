// ----------------- Three main concepts
// Cake Selling Shop
// Entities -> shop, shopkeeper, customer
// Activities -> customer buy cake, shopkeeper remove cake form shelf

// scnario ============== // redux ======= // purpose
// shop                  // store         //hold the state of app
// intention to buy    // action        // Describe what happen
// shopkeeper           // Reducer       //tie the store and actions together

// ----------------- Three fundamentals
// store -> holds the state
// action -> describe state change
// reducer -> actually carried out state transition depending on action

// ------------------ Three Principle
// 1- state of whole app in an obj within single store
{
    numberOfCake: 10,
}
// 2- to update state let redux know by an action not directly update state i-e to buy cake
{
    action: 'toBuyCake',
}
// 3- to change state write pure reducer
//e.g 
reducer(previousState, action);

// ------------------- Action
// way of interact with store only
// info about redux store
// plain obj
// type porperty
// string constants
//_______ action 
{
    type: BUY_CAKE,
    info: "first redux action",
  }
//_______ Action & Action Creator 
const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

// ------------------- Reducer
//spcify how state changes
//how app state will change
// function that accepts state and action and return new state
// previous state, action => return new state
const initailState ={ 
    numOfCake : 10,
}

const reducer = (state = initailState, action)=>{
    if(action.type === 'BUY_CAKE'){

        return {...state, numOfCake : state.numOfCake + 1}
    }
}

// ------------------- Store
// just one store for whole app
//hold app states
// getState() to get the state of app
// dispatch(action) to update state via action
// subscribe(listener) to register listeners 
// unsubscribe()


// import { createStore } from 'redux';
//or
const redux = require('redux');
const createStore = redux.createStore();

const store = createStore(reducer);
console.log('intinal State', store.getState());
const unsubscribe = store.subscribe(()=>{console.log('upadate State', getState())});
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

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
const unsubscribe = store.subscribe(()=>{console.log('upadate State', getState())});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();


// ================================= MIDDLE WARE
//extend redux custom functionality 
// third party exxtension
// loggers, creash reporting, performance 
// Redux logger npm i redux-logger

// ================================= ASYNC Functions
//data fetching
//--------------- state
state={
loading: true,
data: [],
error: ''
}
// loading, users , error

//--------------- action
FETCH_USERS_REQUEST
FETCH_USERS_SUCCSS
FETCH_USERS_FAILURE
// fetch list of user, fetch success, fetch failure

//--------------- reducer
    case: FETCH_USERS_REQUEST
    loading: true

    case: FETCH_USERS_SUCCSS
    loading: false
    users: data[from API]

    case: FETCH_USERS_FAILURE
    loading: false
    error: 'error from API'
