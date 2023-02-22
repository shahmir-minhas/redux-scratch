//===========================================================
//                      Redux OverReview
//===========================================================

import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

//===========================================================
//===========================================================
//===========================================================

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//===========================================================
//===========================================================
//===========================================================

import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  topping: ["pepperoni"],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizze",
  initailState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state, action) => {
      state.topping = [...state.topping, action.payload];
    },
  },
});

export const { toggleGluten, addTopping } = pizzaSlice.actions;
export default pizzaSlice.reducer;
//===========================================================
//===========================================================
//===========================================================

export const App = () => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <>
      {pizza.topping.map((item) => (
        <p>{item}</p>
      ))}

      <button onClick={() => dispatch(addTopping("galic"))}></button>
    </>
  );
};
