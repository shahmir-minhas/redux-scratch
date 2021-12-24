const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").default;
const axios = require("axios");


//=========================================
// ============   initial states ========
//=========================================

const initailState = {
  loading: false,
  users: [],
  error: "",
};

//=========================================
// ============  Actions ========
//=========================================
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//=========================================
// ============   Action Creators ========
//=========================================
const fetchUserRequest = (users) => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//=========================================
// ============   Reducers ========
//=========================================

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};
//=========================================
// ============ ASYNC Action ========
//=========================================

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.map((u) => u.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => dispatch(fetchUserFailure(err.message)));
  };
};

//=========================================
// ============   Store  ========
//=========================================


const store = redux.createStore(reducer, applyMiddleware(thunk));

console.log("inital state", store.getState());
store.subscribe(() => {
  console.log("subscribe", store.getState());
});

store.dispatch(fetchUsers);